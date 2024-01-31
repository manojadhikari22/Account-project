class Account {
    constructor(firstname, lastname, balance) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.balance = balance
    }
    getBalance(){
        return this.balance
    }
   
}

const employee = new Account('Manoj', 'Adhikari', 2500);

document.querySelector('#accountDetails').innerHTML = `
  <p>Name: ${employee.firstname} ${employee.lastname}</p>
  <p>Initial Balance: $${employee.getBalance()}</p>
  
`;