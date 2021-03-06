const reasonInput = document.querySelector('#input-expense');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0)
  {
    const alert = document.createElement('ion-alert');
    alert.subHeader = 'make corrections below';
    alert.message = 'Please Enter Valid Expense and Amount!';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  } 
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $ ' + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener('click', clear);