// click event in the deposit button
document.getElementById("deposit-button").addEventListener('click', function () {

  //1. get the deposit value from the deposit input box
  const getDeposit = document.getElementById("diposit");
  const newDeposit = parseInt(getDeposit.value);
  if (newDeposit > 0) {
    if (newDeposit > 50) {
      // 2. get the previous deposit from deposit show box
      const getPreviousDeposit = document.getElementById("deposit-show");
      const previousDeposit = parseInt(getPreviousDeposit.innerText);
      // 3. calculation of total deposit and show it inside the deposit box
      const totalDeposit = previousDeposit + newDeposit;
      getPreviousDeposit.innerText = totalDeposit;
      // 4.get the previous balance from the balance show box
      const getPreviousBalance = document.getElementById("balance-show");
      const previousBalance = parseInt(getPreviousBalance.innerText);
      // 5.calculation of total balance and set it in the balance show box
      const totalBalance = previousBalance + newDeposit;
      getPreviousBalance.innerText = totalBalance;
      // 6.clean the value of deposit input box
      getDeposit.value = "";
    }
    else {
      alert("You have to deposit money more than 50 dollar");
      getDeposit.value = "";
    }
  }
  else {
    alert("Please enter amount in positive number");
    getDeposit.value = "";
  }
});

// click event in the withdraw button
document.getElementById("withdraw-button").addEventListener('click', function () {
  //1. get the new withdraw value from withdraw input box
  const getWithdraw = document.getElementById("withdraw");
  const newWithdraw = parseInt(getWithdraw.value);
  // handle error while taking an input from user
  if (newWithdraw > 0) {
    //2. get the previous withdraw value from withdraw show box
    const getWithdrawShow = document.getElementById("withdraw-show");
    const previousWithdraw = parseInt(getWithdrawShow.innerText);
    //3. get the previous balance from the balance show box
    const getPreviousBalance = document.getElementById("balance-show");
    const previousBalance = parseInt(getPreviousBalance.innerText);
    /* 4. calculation of total withdraw and set it in the withdraw show  box and 5. calculation of new balance and set it in the balance show box */
    // handle an error while withdrawing money more than previous balance
    if (newWithdraw < previousBalance) {
      const totalWithdraw = newWithdraw + previousWithdraw;
      const newBalance = previousBalance - newWithdraw;
      const validityBalanceForWithdraw = newBalance - 200;
      if (validityBalanceForWithdraw >= 0) {
        getWithdrawShow.innerText = totalWithdraw;
        getPreviousBalance.innerText = newBalance;
        // 6. clean the value of withdraw input box
        getWithdraw.value = "";
      }
      else {
        alert("You have to keep at least 200 dollars to active your account");
        getWithdraw.value = "";
      }
    }
    else if (newWithdraw == 200) {
      alert("You have to keep at least 200 dollars to active your account");
      getWithdraw.value = "";
    }
    else {
      alert("You have to withdraw less money than your previous balance");
      getWithdraw.value = "";
    }
  }
  else {
    alert("Please enter amount in positive number");
    getWithdraw.value = "";
  }
});