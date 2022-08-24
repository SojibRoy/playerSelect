const playerArray =[];

function display (players){
  const playerList = document.getElementById('player-list')
  playerList.innerText="";
  for(let i=0;i<players.length;i++){
    const name = players[i+1];
    const li = document.createElement("li");
    li.innerText=players[i];
    playerList.appendChild(li)
  }
}

function addPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    if(playerArray.length<5)
    { playerArray.push(playerName)}
    else
    {return alert("Maximum number of player is selected")};
    
    display(playerArray)
    element.disabled=true;
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const budget = document.getElementById('player-rate')
    const budgetValueString = budget.value
    const budgetValue = parseFloat(budgetValueString);
    const calculateValue = playerArray.length * budgetValue;

    const playerExpensesField = document.getElementById('player-expense');
    const playerExpensesValueString = playerExpensesField.innerText;
    const playerExpensesValue = parseFloat(playerExpensesValueString);
    playerExpensesField.innerText=calculateValue;
})

document.getElementById('btn-total').addEventListener('click',function(){
    
    const budget = document.getElementById('player-rate')
    const budgetValueString = budget.value
    const budgetValue = parseFloat(budgetValueString);
    const calculateValue = playerArray.length * budgetValue;

    const playerExpensesField = document.getElementById('player-expense');
    const playerExpensesValueString = playerExpensesField.innerText;
    const playerExpensesValue = parseFloat(playerExpensesValueString);
    playerExpensesField.innerText=calculateValue;

    const mangerField = document.getElementById('manager-field');
    const managerFieldValueString = mangerField.value;
    const managerFieldValue=parseFloat(managerFieldValueString);
    

    const coachField = document.getElementById('coach-field');
    const coachFieldValueString = coachField.value;
    const coachFieldValue=parseFloat(coachFieldValueString);
    

    const totalExpenseField = document.getElementById('total-expense');
    const totalExpenseValueString = totalExpenseField.innerText;
    const totalExpenseValue=parseFloat(totalExpenseValueString);

    const total = playerExpensesValue + managerFieldValue + coachFieldValue;

    totalExpenseField.innerText=total;
    
})




