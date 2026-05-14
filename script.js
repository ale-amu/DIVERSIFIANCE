var factList = [
  "You can start an IT career at any age - If you have the drive and are willing to learn along with the constantly evolving world of I.T., you can start an IT career at the age of 20,40,60 …or any age!",/*0*/
  "The I.T. industry provides an abundance of remote and in-person occupations so if you're one to lounge at home while working or step out in a 3-piece suit or pantsuit, I.T. is the way to go.",/*2*/
  "Many people often hear that I.T. careers pay extremely well. This is true, so if financial security is a major concern to for your future, a job in I.T. could provide stability and peace of mind.",/*3*/
  "I.T. fields enable one to dabble in various areas before finding the best fit. One is able to explore their creative interests enabling self discovery while learning",/*4*/
  "There is an I.T. career everywhere. While working in presidential offices, the CIA, schools, hospitals, athletic stadiums, banks, or even NASA; never fear an I.T. career will always be available and allows one to work in tech while being close to other areas of interest,"];/*5*/

/* .js files add interaction to your website */
var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret() {
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + ", you do not have to commit to a career in I.T., because your interests now do not have to define your future. For now, just focus on exploring every resource to discover your every possibility."
}

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }


}/* .js files add interaction to your website */