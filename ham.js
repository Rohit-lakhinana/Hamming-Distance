
const str = document.getElementById('str');
const submit = document.getElementById('submit');
const answerBox = document.getElementById('answer-box');
const errorMessage= document.getElementById('error-message')

submit.addEventListener('click', function(e) {

  string = str.value.split(',');
  if (string.length !== 2) {
    errorMessage.innerHTML= "Please input two strings of equal length seperated by a comma";

    return;
  }

  let str1 = string[0].trim();

  let str2 = string[1].trim();

  if (str1.length !== str2.length) {
    errorMessage.innerHTML= "Error: The strings aren't of equal length";

    return;
  }

  let count = 0;
  for (i = 0; i < str1.length; i++) {
  
    if (str1[i] !== str2[i]) count++;
  }
  
  answerBox.innerHTML = count;
});

str.oninput = function(e) {
  if (this.value.length++ || this.value.length++) {
    answerBox.innerHTML = "";
    errorMessage.innerHTML= "";
  }
};