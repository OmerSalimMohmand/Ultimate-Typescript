"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    balance;
    nickname;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Omer", 0);
account.deposit(100);
account.balance = 400;
console.log(account.balance);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=OOP.js.map