

// hämta input fält

const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")

//Knappar

const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")

//Listor
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")

// saldo
const balanceDisplay = document.getElementById("balance")


// 2 arrayer
let incomes = [];
let expenses = [];

//funktion för transaktion
function addTransaction(type) {
    let description = descInput.value;
    let amount = Number(amountInput.value);

    if (description !== "" && amount > 0) {
        let transaction = { description: description, amount: amount, type: type };

        if (type === "income"){
        incomes.push(transaction);
        let li = document.createElement("li");
        li.textContent = `${description} + ${amount} kr`;
        incomeList.appendChild(li);
        } 
        
        else {
            expenses.push(transaction);
            let li = document.createElement("li");
            li.textContent = `${description} - ${amount} kr`;
            expenseList.appendChild(li);

        }
//Lägg till i transaktionslistan
let liTrans = document.createElement("li");
    liTrans.textContent = `${type.toUpperCase()}: ${description} (${amount} kr)`;
    transactionList.appendChild(liTrans);


//uppdatera saldo
updateBalance();


//Rensa inputs
 descInput.value = "";
 amountInput.value = "";


    }
}

// Funktion för att uppdatera saldo
function updateBalance() {
  let totalIncome = 0;
  let totalExpense = 0;

  for (let i = 0; i < incomes.length; i++) {
    totalIncome += incomes[i].amount;
  }
  for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i].amount;
  }

  let balance = totalIncome - totalExpense;
    balanceDisplay.textContent = balance;

}


// Event listeners för knappar
incomeBtn.addEventListener("click", function() {
  addTransaction("income");
}
);
expenseBtn.addEventListener("click", function() {
  addTransaction("expense");
}
);