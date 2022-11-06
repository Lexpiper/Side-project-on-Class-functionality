const acctBalDiv = document.getElementById("acctStat");
const message = document.getElementById("message");
const input = Number(document.getElementById("input").value);

class Bank {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("deposited", amount);
    console.log({ balance: this.balance });
  }

  withdraw(amount) {
    if (amount > this.balance || amount == 0) {
      return alert("❌insufficent Funds");
    } else {
      this.balance -= amount;
    }
    console.log("you have withdrawn", amount);
    console.log(this.balance);
  }
}

const lexpiper = new Bank("lexpiper", 1000);

const depositor = () => {
  if (confirm(`confirm Deposit`) == true) {
    lexpiper.deposit(input);
    acctBalDiv.innerText = `$${lexpiper.balance}`;
    message.innerText = `Deposit successful ✅`;
  } else {
    message.innerText = `type another amount`;
  }
  setTimeout(() => {
    message.innerText = "";
  }, 2000);
};

const withdrawal = () => {
  if (confirm(`are you sure you want to withdraw this amount?`) == true) {
    lexpiper.withdraw(input);
    acctBalDiv.innerText = `$${lexpiper.balance}`;
    message.innerText = `Withdrawal successful ✅`;
  } else if (input > this.balance) {
    ("Insufficient Funds");
  }
  setTimeout(() => {
    message.innerText = "";
  }, 2000);
};
