function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

///Adding prototype
CreatePencil.prototype.printText = function (text) {

    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
}

let pencil1 = new CreatePencil("Nataraj", 10, "black", "natraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");



class Parent {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    printFun() {
        super.print();
        console.log(this.age);
    }
}
const p1 = new Child("Priyanshu", 22);
p1.printFun();



// Object
const animal = {
    eats: true,

    walks() {
        console.log("Animal walks");
    }
};

// Object 
const dog = Object.create(animal);
dog.name = "Leo";
dog.bark = () => {
    console.log("Dog barks");
}

console.log(dog.eats);
console.log(dog.name);
dog.walks();



// #Method => 1.Encapsulation {Clouser}
function bankAccount(initialBalace) {
    let balance = initialBalace;

    return {
        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            if (amount < balance) {
                balance -= amount;
            } else {
                console.log("Not Sufficient balance");

            }
        },
        getBalance() {
            return balance;
        }
    }
}

let person = bankAccount(80000);
person.deposit(20000);
console.log(person.getBalance());

person.withdraw(200000);


// #Method => 2.Encapsulation {#}

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    };

    withdraw(amount) {
        if (amount < balance) {
            this.#balance -= amount;
        } 
    };

    getBalance() {
        return this.#balance;
    }
}

let p=new BankAccount(80000);
p.deposit(20000);
console.log(p.getBalance());