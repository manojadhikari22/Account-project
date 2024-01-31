class Account {
    constructor(firstname, lastname, balance) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.balance = balance
    }
    getBalance(){
        return this.balance
    }
    amountWithdraw(withdraw) {
        return this.balance -= withdraw
    }
    amountDeposit(deposit) {
        return this.balance += deposit
    }
   
}

const employee = new Account('Manoj', 'Adhikari', 2500);

document.querySelector('#accountDetails').innerHTML = `
  <p>Name: ${employee.firstname} ${employee.lastname}</p>
  <p>Initial Balance: $${employee.getBalance()}</p>
  <p>Balance after withdrawal: $${employee.amountWithdraw(1500)}</p>
  <p>Balance after deposit: $${employee.amountDeposit(3000)}</p>
`;