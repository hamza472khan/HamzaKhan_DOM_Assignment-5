//Task- 1

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button was clicked!');
});

//Task- 2

const updateTextButton = document.getElementById('updateTextButton');
const origionalText = document.getElementById('originalText');
updateTextButton.addEventListener('click', function() {
    origionalText.textContent = 'Text has been updated!';
});

//Task- 3
const changeColorButton = document.getElementById('changebgcolorbtn');
 changeColorButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
 });

 //Task- 4
 //selecting the input field and para
 const inputField = document.getElementById('userInput');
 const displayPara = document.getElementById('outputpara');

 inputField.addEventListener('input', function() {
    displayPara.textContent = inputField.value;
 });


 //Task- 5
 const box = document.getElementById('hoverBox');

  // 2. When mouse enters the box: Change color
  box.addEventListener('mouseenter', function() {
    box.style.backgroundColor = "coral";
  });

  // 3. When mouse leaves the box: Revert to original color
  box.addEventListener('mouseleave', function() {
    box.style.backgroundColor = "gray";
  });
 
  const doubleClickButton = document.getElementById('doubleClickButton');
  doubleClickButton.addEventListener('dblclick', function() {
    alert('Button was double-clicked!');
  });