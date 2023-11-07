class Department {
  private _name: string;
  //   public get name(): string {
  //     return this._name;
  //   }
  //   public set name(value: string) {
  //     this._name = value;
  //   }

  constructor(name: string) {
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
