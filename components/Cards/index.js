// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response.data);
    let objectArray = Object.entries(response.data.articles);
    console.log(objectArray);
    objectArray.forEach( item => {
        item[1].forEach( value => {
            CardContent(value);
        })
    })
})
.catch(error => {
    console.log('the data was not returned', error);
})

function CardContent(value) {
    const topContainer = document.createElement('div');
    const headlineContainer = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const content = document.createElement('span');

    topContainer.classList.add('card');
    headlineContainer.classList.add('headline');
    authorContainer.classList.add('author');
    imageContainer.classList.add('img-container');

    headlineContainer.textContent = value.headline;
    image.src = value.authorPhoto;
    content.textContent = value.authorName;

    topContainer.appendChild(headlineContainer);
    topContainer.appendChild(authorContainer);
    authorContainer.appendChild(imageContainer);
    authorContainer.appendChild(content);
    imageContainer.appendChild(image);

    document.querySelector('.cards-container').appendChild(topContainer);
}