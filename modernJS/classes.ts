abstract class Department {
    static fiscalYear = 2022;
    // private readonly
    // private name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];

    static createEmployee(name: string) {
        return { name: name };
    }

    constructor(protected readonly id: string, public name: string) {
    }

    // describe(this: Department) {
    //     console.log(`Department (${this.id}): ${this.name}`);
    // }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// Instance of Department
// const accounting = new Department("Da", "Accounting");

// Output
// accounting.addEmployee('宝鐘マリン');
// accounting.addEmployee('Max');

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

const employee1 = Department.createEmployee('John');
console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    describe(): void {
        console.log(`IT Department - ID: ${this.id}`);
    }
}

const it = new ITDepartment("dit", ["Max"]);
console.log(it);

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }


    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    addEmployee(name: string) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }

    printReports() {
        console.log(this.reports);
    }
}

// const accounting2 = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addEmployee("Miko");

accounting.describe();
