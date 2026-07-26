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
