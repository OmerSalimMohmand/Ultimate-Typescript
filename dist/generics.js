"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "a");
pair.value.toUpperCase();
let pair2 = new KeyValuePair("isActive", true);
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray(1);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray(1);
function fetch(url) {
    const response = null;
    return { data: response, error: null };
}
let user = fetch("http://example.com/api/user");
user.data?.username;
let product = fetch("http://example.com/api/product");
product.data?.title;
const userResponse = {
    success: true,
    message: "User fetched successfully",
    data: {
        id: 1,
        name: "Omer",
    },
};
const productResponse = {
    success: true,
    message: "Product fetched successfully",
    data: {
        id: 1,
        title: "Laptop",
        price: 1000,
    },
};
const productsResponse = {
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
function echo(value) {
    return value;
}
function log(value) {
    console.log(value);
}
echo("abc");
echo(123);
log({ name: "Omer" });
function echo(value) {
    return value;
}
echo({ name: "Omer" });
echo({ name: "Omer", salary: 1000 });
echo({ name: "Omer", salary: 1000, age: 123 });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    salary;
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
}
function echo(value) {
    return value;
}
echo(new Person("Omer"));
echo(new Employee("Omer", 1000));
echo({ name: "Omer", salary: 1000, age: 123 });
class Repository {
    save(item) {
        console.log('Saving item:', item);
    }
}
class UserRepository extends Repository {
    findById(id) {
        return { id, name: 'John Doe' };
    }
}
let userRepo = new UserRepository();
userRepo.save({ id: 1, name: 'Alice' });
userRepo.findById(1);
class PaginatedRepository extends Repository {
    getPage(pageNumber) {
        return [];
    }
}
const userPagedRepo = new PaginatedRepository();
userPagedRepo.save({ id: 2, name: 'Bob' });
userPagedRepo.getPage(1);
const productPagedRepo = new PaginatedRepository();
productPagedRepo.save({ id: 1, title: 'Product 1' });
productPagedRepo.getPage(1);
class Repository {
}
class Repository {
    objects = [];
    save(item) {
        this.objects.push(item);
        console.log("Saving item:", item);
    }
    findById(id) {
        return this.objects.find((item) => item.id === id);
    }
}
class SearchableRepository extends Repository {
    findByName(name) {
        return this.objects.find((item) => item.name === name);
    }
}
class Repository {
    objects = [];
    save(item) {
        this.objects.push(item);
        console.log("Saving item:", item);
    }
    find(property, value) {
        return this.objects.find(obj => obj[property] === value);
    }
}
const productRepository = new Repository();
productRepository.save({ id: 1, name: "Laptop", price: 999.99 });
productRepository.find("name", "Laptop");
productRepository.find("price", 999.99);
productRepository.find("title", 1);
const user = {
    id: null,
    name: "Omer",
    email: "omer@gmail.com",
    password: "123",
};
const product = {
    name: "Potato",
};
let users = {
    id: 1,
    name: "Omer",
};
let users = {
    id: 1,
    name: "Omer",
    email: "omer@gmail.com",
    password: "123"
};
let users = {
    id: 1,
    name: "Omer",
    email: "omer@gmail.com",
};
let users = {
    id: 1,
    name: "Omer",
    email: "omersalim@gmail.com",
    password: "123",
};
let users = {
    id: 1,
    name: "Omer",
};
function getUser() {
    return {
        id: 1,
        name: "Omer",
        email: "omersalim@gmail.com",
        password: "123",
    };
}
let user = {
    id: 2,
    name: "Omer Salim",
    email: "omer@gmail.com",
    password: "123",
};
let userRole = "admin";
let scores = {
    math: 94,
    Physics: 85
};
const defaultUser = {
    id: 1,
    name: "Alex",
    roles: ["admin", "user"]
};
const newUser = {
    id: 2,
    name: "Sam",
    roles: ["user"]
};
//# sourceMappingURL=generics.js.map