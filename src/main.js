// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverBtn = document.querySelector(".random-cover-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var viewSavedCoverBtn = document.querySelector(".view-saved-button");
var makeYourOwn = document.querySelector(".make-new-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = makeRandomCover();
randomCoverBtn.addEventListener("click", makeRandomCover);


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
var coverNum = getRandomIndex(covers);
var titleNum = getRandomIndex(titles);
var descriptorNum1 = getRandomIndex(descriptors);
var descriptorNum2 = getRandomIndex(descriptors);
currentCover = new Cover(covers[coverNum], titles[titleNum], descriptors[descriptorNum1], descriptors[descriptorNum2]);
coverImage.src = currentCover.cover;
coverTitle.innerText = currentCover.title;
tagline1.innerText = currentCover.tagline1;
tagline2.innerText = currentCover.tagline2;
}
