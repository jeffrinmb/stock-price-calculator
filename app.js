const initialPrice = document.querySelector('#initial-price');
const quantityStocks = document.querySelector('#stock-quantity');
const currentPrice = document.querySelector('#current-price');
const btnCheck = document.querySelector('#btn-check');
const outputMessage = document.querySelector('#output');

const displayMessage = message => {
  outputMessage.innerText = message;
};

const validateInputs = () => {
  if (
    initialPrice.value === '' ||
    quantityStocks.value === '' ||
    currentPrice.value === ''
  ) {
    displayMessage('Please enter value for all fields!');
    return false;
  }
  if (
    Number(initialPrice.value < 0) ||
    Number(quantityStocks.value < 0) ||
    Number(currentPrice.value < 0)
  ) {
    displayMessage('Please enter non-negative values!');
    return false;
  }
  return true;
};

const calculateProfitOrLoss = (
  initialPriceVal,
  quantityStocksVal,
  currentPriceVal
) => {
  if (initialPriceVal > currentPriceVal) {
    const lossValue = initialPriceVal - currentPriceVal;
    const percentageLoss = (lossValue / initialPriceVal) * 100;
    const absoluteLoss = lossValue * quantityStocksVal;
    outputMessage.style.color = 'red';
    displayMessage(
      `Oh No! You have encountered a loss of ${absoluteLoss} which is ${percentageLoss.toFixed(
        2
      )}%`
    );
  } else if (initialPriceVal < currentPriceVal) {
    const profitValue = currentPriceVal - initialPriceVal;
    const percentageProfit = (profitValue / initialPriceVal) * 100;
    const absoluteProfit = profitValue * quantityStocksVal;
    outputMessage.style.color = 'green';
    displayMessage(
      `Yay! You have got a profit of ${absoluteProfit} which is ${percentageProfit.toFixed(
        2
      )}%`
    );
  } else {
    displayMessage('No Pain, No Gain and No Gain, No Pain!');
  }
};

btnCheck.addEventListener('click', () => {
  displayMessage('');
  outputMessage.style.color = 'white';
  if (validateInputs()) {
    calculateProfitOrLoss(
      Number(initialPrice.value),
      Number(quantityStocks.value),
      Number(currentPrice.value)
    );
  }
});
