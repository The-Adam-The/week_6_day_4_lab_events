document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  //button event
  let buttonClicks = 0;
  const handleButtonClick = function() {
    console.log("Button's being clicked, yeaaahaahahahaha boiiiii!");
    const buttonText = document.querySelector('#button-result');
    buttonClicks += 1;
    buttonText.textContent = `That button has been clicked ${buttonClicks} times.`;
  };

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  //input event
  const handleInput = function(event) {
    console.log('Input is being changed')
    console.log(event.target.value) // event.target.value captures the whole value created showing the form

    const resultParagraph = document.querySelector('#input-result')
    resultParagraph.textContent = `You Typed: ${event.target.value}` //Output into the DOM in realtime
  };

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  const handleSelect = function(event){
    console.log(`Select value has changed to: ${event.target.value}`);
    const selectParagraph = document.querySelector('#select-result');
    selectParagraph.textContent = `You Selected: ${event.target.value}`;
  };

  const selectInput = document.querySelector('#select');
  selectInput.addEventListener('change', handleSelect);

  //Submit event
  const handleFormSubmit = function(event) {
    event.preventDefault()// prevents the page from refreshing
    console.dir(event.target)
    console.log(event.target.first_name.value)
    console.log(event.target.last_name.value)
    const resultParagraph = document.querySelector('#form-result')
    resultParagraph.textContent = `Your name is: ${event.target.first_name.value} ${event.target.last_name.value}.`
  }; 

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit)
});

