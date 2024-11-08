// Function to generate a random color
function getRandomColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];
    
    // Pick a random color from the array
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const colorButton = document.getElementById("colorButton");

  // Change background color when button is clicked
colorButton.onclick = function() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorButton.innerText = `Background Color: ${newColor}`;
    
  };
  