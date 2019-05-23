const salaryOperations = {
    salary : 0,
    takeSalary(basicSalary){
        this.salary = basicSalary;
    },
    hra(){
        return this.salary * 0.30;
    },
    da(){
        return this.salary * 0.10;
    },
    ta(){
        return this.salary * 0.20;
    },
    pf(){
        return (this.salary * 0.05)*2;
    },
    gs(){
        return parseInt(this.salary) + this.hra() + this.da() + this.ta() - this.pf();
    },
    tax(){
        return (this.gs() * 0.10);
    },
    ns(){
        return this.gs() - this.tax();
    }

}