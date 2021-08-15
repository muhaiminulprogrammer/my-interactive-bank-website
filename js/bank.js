// click event in the deposit button
document.getElementById("deposit-button").addEventListener('click', function () {

  // get the deposit value from the deposit input box
  const getDeposit = document.getElementById("diposit");
  let getDepositValue = parseInt(getDeposit.value);

  // calling a function to calculate total deposit and total balance
  calculationOfDiposit(getDepositValue);
});

function calculationOfDiposit(catchDepositAmount) {
  // calculation of total deposit
  const getDepositShow = document.getElementById("deposit-show");
  const getDepositShowValue = parseInt(getDepositShow.innerText);
  let totalDeposit = getDepositShowValue + catchDepositAmount;
  getDepositShow.innerText = totalDeposit;
  // calculation of total balance
  const getBalanceShow = document.getElementById("balance-show");
  let getBalance = parseInt(getBalanceShow.innerText);
  const totalBalance = getBalance + catchDepositAmount;
  getBalanceShow.innerText = totalBalance;
  // clean the value of deposit input box
  getDepositValue = "";
}

// click event in the withdraw button
document.getElementById("withdraw-button").addEventListener('click', function () {
  //1. get the new withdraw value from withdraw input box
  const getWithdraw = document.getElementById("withdraw");
  const newWithdraw = parseInt(getWithdraw.value);
  //2. get the previous withdraw value from withdraw show box
  const getWithdrawShow = document.getElementById("withdraw-show");
  const previousWithdraw = parseInt(getWithdrawShow.innerText);
  //3. calculation of total withdraw and set it in the withdraw show box
  const totalWithdraw = newWithdraw + previousWithdraw;
  getWithdrawShow.innerText = totalWithdraw;
  //4. get the previous balance from the balance show box
  const getPreviousBalance = document.getElementById("balance-show");
  const PreviousBalance = parseInt(getPreviousBalance.innerText);
  //5. calculation of new balance and set it in the balance show box
  const newBalance = PreviousBalance - newWithdraw;
  getPreviousBalance.innerText = newBalance;
  // 6. clean the value of withdraw input box
  getWithdraw.value = "";
});