// Get the title element
const title = document.querySelector('.title');

// Define the animation function
let animationInterval;
function animateTextShadow() {
  const blurRadius = Math.floor(Math.random() * 21);
  title.style.textShadow = `0 0 ${blurRadius}px blue`;
}

// Start the animation with the desired delay
const delay = 50; // Adjust this value to control the speed (in milliseconds)
animationInterval = setInterval(animateTextShadow, delay);

// Buy button functionality
const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', () => {
  window.open('https://app.uniswap.org/swap?chain=polygon', '_blank');
});

// Buy button functionality
const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', () => {
  window.open('https://app.uniswap.org/swap?chain=polygon', '_blank');
});