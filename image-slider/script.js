let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .cards");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function() {
  showSlider("next");
}
prevDom.onclick = function() {
  showSlider("prev");
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut; //specifies the time the slider will run automatically
let runAutoRun = setTimeout(()=>{
  nextDom.click();
}, timeAutoNext); //An autorun variable to write content for this action
function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .cards .home__card');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .home__card');

  //If user clicks the next button, i will use appendChild to move the first item to the end of the row.
  //At this point, the second item will be the first item
  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    //Used appendChild to move the first thumbnail image to the end
    thumbnailDom.appendChild(itemThumbnail[0]);
    //Adding the next class to the carousel class to run the corresponding animation
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    //Move the last item to the first position using the prepend function
    //With the variable "positionLastItem" being the last item position.
    listItemDom.prepend(itemSlider[positionLastItem]);
    //likwise, i will also move the last thumbnail image to the first position
    //The operating principle of "prepend" in this case, is the same as "appendChild"
    //it only changes position and does not generate new elements
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    //Adding the previous class to the carousel class so the system runs the animation for this case
    carouselDom.classList.add("prev");
  }

  //setTimeout will remove the next class from the carousel class after 3s
  //clearTimeout is used to ensure that each time the showSlider function is run, the countdown starts from the beginning
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() =>{
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning)

  //Ensures that each time the slider runs, the 7seconds count will start from the beginning
  //setTimeout to ensure that the system will move to the next slide after 7 secs
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(()=>{
    nextDom.click();
  }, timeAutoNext)
}