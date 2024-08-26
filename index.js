
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const liveResultDisplay = document.getElementById('liveResult');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    resultDisplay.value = resultDisplay.value.replace('0', '');
    const value = button.value;

    if (value === 'DEL') {
      resultDisplay.value = resultDisplay.value.slice(0, -1);
    } else if (value === '=') {
      try {
        resultDisplay.value = eval(resultDisplay.value.replace('x', '*').replace('÷', '/'));
      } catch {
        resultDisplay.value =  liveResultDisplay.value;
      }
    } else if (value === 'RESET') {
      resultDisplay.value = '0';
      liveResultDisplay.value = '0';
    } else {
      resultDisplay.value += value;
    }
    updateResult();
  });
});

function updateResult() {
 if (/\d$/.test(resultDisplay.value)) {
  try  {
    liveResultDisplay.value = eval(resultDisplay.value.replace('x', '*').replace('÷', '/')) || '0';
    }
 catch {
  liveResultDisplay.value = 'ERROR';
}
} else if (value = 'DEL') {
  liveResultDisplay.value = eval(resultDisplay.value.slice(0, -1).replace('x', '*').replace('÷', '/')) || '0';
}
   
  
};
