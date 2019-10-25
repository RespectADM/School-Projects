class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

class Manager extends Employee  {
    constructor(name, salary, hireDate, descriptionOfJob) {
         super(name, salary, hireDate);
         this.descriptionOfJob = descriptionOfJob;    
    }
    
    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary +
     " because he manages the sales staff.");
    }
}


class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;        
    }

    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + ", makes " + this.salary + " a year, and has " 
        + this.experience + " years of experience." );
    }
}


class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees) {
        super(name, salary, hireDate);
        this.degrees = degrees;    
    }

    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + ", makes " + this.salary +
         " a year, and has a " + this.degrees + "." );
    }
}

let John = new Manager("John Smith", 85000, "08/22/1028", "Sales Team Mananger" );

John.jobDescription();

let Mary = new Designer("Mary Sue", 60000, "07/23/18", 6);

Mary.yearsExperience();

let Robert = new SalesAssociate("Robert White", 25000, "04/24/18", "Associates" );

Robert.degreeCompleted();