// Generic classes:

class KeyValuePair<K, V> {
  constructor(
    public key: K,
    public value: V,
  ) {}
}

let pair = new KeyValuePair<number, string>(1, "a");
pair.value.toUpperCase(); // Intellisense pops up all number methods for key and string methods for value here.

let pair2 = new KeyValuePair("isActive", true); // Compiler infers the types of key and value as string and boolean respectively.

// Generic functions:

function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray(1);
//OR
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils.wrapInArray(1);

// Generic Interfaces:

// Suppose we have a website with two end points: one for fetching user data and another for fetching product data.
// http://example.com/api/user
// http://example.com/api/product
// We can create a generic interface to represent the result of these fetch operations.

interface Result<T> {
  data: T | null;
  error: string | null;
}

// function fetch<T>(): Result<T> { // We use fetch<T> because this function returns a generic result of type T.
//   return { data: null, error: null };
// }

// A more understandable version:

function fetch<T>(url: string): Result<T> {
  const response: T | null = null; // Simulating a fetch operation
  return { data: response, error: null };
}

// To see how it really works for further understanding, see the following version:

// async function fetch<T>(url: string): Promise<Result<T>> {
//   try {
//     const response = await fetch(url);
//     const data: T = await response.json();
//     return { data, error: null };
//   } catch (error) {
//     return { data: null, error: (error as Error).message };
//   }
// }

interface User {
  username: string;
}

interface Product {
  title: string;
}

let user = fetch<User>("http://example.com/api/user");
user.data?.username;

let product = fetch<Product>("http://example.com/api/product");
product.data?.title;

// ApiResponse example:

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  success: true,
  message: "User fetched successfully",
  data: {
    id: 1,
    name: "Omer",
  },
};

interface Product {
  id: number;
  title: string;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  success: true,
  message: "Product fetched successfully",
  data: {
    id: 1,
    title: "Laptop",
    price: 1000,
  },
};

// For multiple products:
const productsResponse: ApiResponse<Product[]> = {
  success: true,
  message: "Products fetched successfully",
  data: [
    {
      id: 1,
      title: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      title: "Phone",
      price: 500,
    },
  ],
};

// Generic constraints:

function echo<T extends number | string>(value: T): T {
  return value;
}

function log<T extends { name: "Omer" }>(value: T) {
  console.log(value);
}

echo("abc");
echo(123);
log({ name: "Omer" });

interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

function echo<T extends Person>(value: T): T {
  return value;
}

echo({ name: "Omer" });
echo({ name: "Omer", salary: 1000 }); // valid as it has the shape of Employee interface which has been derived from the Person interface.
echo({ name: "Omer", salary: 1000, age: 123 }); // Even though this object has an extra property 'age', it is still valid because TypeScript uses structural typing. The object still satisfies the shape of the Person interface, so it can be passed to the echo function.

// Similarly with classes:

class Person {
  constructor(public name: string) {}
}

class Employee extends Person {
  constructor(
    name: string,
    public salary: number,
  ) {
    super(name);
  }
}

function echo<T extends Person>(value: T): T {
  return value;
}

echo(new Person("Omer"));
echo(new Employee("Omer", 1000));
echo({ name: "Omer", salary: 1000, age: 123 });

// Generic Inheritance:
// Think of it like inheritance in real life.
// Generic inheritance promotes:
// - Reusability
// - Type safety
// - Cleaner design
// - Less duplicated code

//Example 1: In this example we inherit the specialized UserRepository which fixes the generic type T to User.
// This allows us to create a repository specifically for User objects, while still leveraging the generic functionality provided by the base Repository class.

class Repository<T>{
    save(item: T): void {
        console.log('Saving item:', item);
    }
}

interface User{
    id: number;
    name: string;
}

interface Product{
    id: number;
    title: string;
}

class UserRepository extends Repository<User>{
    findById(id: number): User | null {
        // Simulate finding a user by ID
        return { id, name: 'John Doe' };
    }
}

let userRepo = new UserRepository();
userRepo.save({ id: 1, name: 'Alice' });
userRepo.findById(1);

//Example 2: Sometimes we don't want to fix the generic type in the subclass and keeps it generic so it works with different types.

class PaginatedRepository<T> extends Repository<T>{
    getPage(pageNumber: number): T[] {
        // Simulate fetching a page of items
        return [];
    }
}

const userPagedRepo = new PaginatedRepository<User>();
userPagedRepo.save({ id: 2, name: 'Bob' });
userPagedRepo.getPage(1);

const productPagedRepo = new PaginatedRepository<Product>();
productPagedRepo.save({ id: 1, title: 'Product 1' });
productPagedRepo.getPage(1);

// We can also constrain generics when extending them:
interface Entity {
    id: number;
}
class Repository<T extends Entity> {... }

// Example 3: In this example, our type T needs to be constrained to the Entity interface so that we can access the id property in the findById method without any errors.

// Example 3: In this example, our type T needs to be constrained to the Entity interface so that we can access the id property in the findById method without any errors.

interface Entity {
  id: number;
  name: string;
}

class Repository<T extends Entity> {
  protected objects: T[] = [];

  save(item: T): void {
    this.objects.push(item);
    console.log("Saving item:", item);
  }

  findById(id: number): T | undefined {
    // Simulate finding an item by name
    return this.objects.find((item) => item.id === id); // item.id gives an error because T is a generic type and we don't know if it has an id property. To fix this, we can constrain T to extend the Entity interface.
  }
}

// Similarly:
class SearchableRepository<T extends Entity> extends Repository<T> {
  findByName(name: string): T | undefined {
    // Simulate finding an item by name
    return this.objects.find((item) => item.name === name); // item.name works if we constrain T to extend the Entity interface. 
  }
}

// Golden Rule:

// Whenever you see:
// class Something<T> extends SomethingElse<T>
// read it in English as:
// "I am inheriting all the behavior of the parent class and I want to keep it generic."

// And whenever you see:
// class Something extends SomethingElse<User>
// read it as:
// "I am inheriting all the behavior of the parent class, but I am specializing it for the User type."


// keyof Operator:
// keyof is a TypeScript operator that takes an object type and produces a string or numeric literal union of its keys.
// It is often used in generic programming to create functions or classes that can work with the properties of an object in a type-safe manner.
interface Entity {
  id: number;
  name: string;
}

interface Product extends Entity {
  price: number;
}

class Repository<T extends Entity> {
  protected objects: T[] = [];

  save(item: T): void {
    this.objects.push(item);
    console.log("Saving item:", item);
  }

  find(property: keyof T, value: unknown): T | undefined { // Remember that keyof T is a TypeScript-only construct that lives only at compile-time and erased at runtime. So we cannot use it to access or log the property of an object at runtime.
    return this.objects.find(obj => obj[property] === value);
  }
}

const productRepository = new Repository<Product>();
productRepository.save({ id: 1, name: "Laptop", price: 999.99 });
productRepository.find("name", "Laptop");
productRepository.find("price", 999.99);
productRepository.find("title", 1); // Error: title is not a key of Product