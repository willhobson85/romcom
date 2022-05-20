// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var homeBtn = document.querySelector(".home-button");
var randomCoverBtn = document.querySelector(".random-cover-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var viewSavedCoverBtn = document.querySelector(".view-saved-button");
var makeYourOwnBtn = document.querySelector(".make-new-button");
var homeView = document.querySelector(".home-view");
var saveView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = makeRandomCover();
randomCoverBtn.addEventListener("click", makeRandomCover);
makeYourOwnBtn.addEventListener("click", showMakeYourOwn);
viewSavedCoverBtn.addEventListener("click", showSavedBooks);
homeBtn.addEventListener("click", showMainPage);

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

function showMakeYourOwn() {
  formView.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
  homeView.classList.add("hidden");
  saveView.classList.add("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");

}

function showSavedBooks() {
  saveView.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
}

function showMainPage() {
  homeView.classList.remove("hidden");
  randomCoverBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
  homeBtn.classList.add("hidden");
  if(!saveView.classList.contains("hidden")) {
    saveView.classList.add("hidden");
  } else if(!formView.classList.contains("hidden")) {
    formView.classList.add("hidden");
  }
}
