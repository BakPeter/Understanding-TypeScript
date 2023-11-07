"use strict";
class Department {
    constructor(name) {
        this._name = name;
    }
    describe() {
        console.log(this._name);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
console.log(JSON.stringify(accounting));
accounting.describe();
