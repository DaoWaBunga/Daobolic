const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', () => {
  window.open('https://app.uniswap.org/swap?outputCurrency=0xYourContractAddress', '_blank');
});
