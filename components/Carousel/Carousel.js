/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselIndex() {
  const container = document.createElement('div');
  const leftButton = document.createElement('div');
  const image1 = document.createElement('img');
  const image2 = document.createElement('img');
  const image3 = document.createElement('img');
  const image4 = document.createElement('img');
  const rightButton = document.createElement('div');

  container.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  image1.src = "./assets/carousel/mountains.jpeg";
  image2.src = "./assets/carousel/computer.jpeg";
  image3.src = "./assets/carousel/trees.jpeg";
  image4.src = "./assets/carousel/turntable.jpeg";

  document.querySelector('.carousel-container').appendChild(container);
  container.appendChild(leftButton);
  container.appendChild(image1);
  container.appendChild(image2);
  container.appendChild(image3);
  container.appendChild(image4);
  container.appendChild(rightButton);

  return container;
}

carouselIndex();