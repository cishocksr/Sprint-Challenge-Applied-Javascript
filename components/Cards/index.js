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

function articleCreator(data) {
  // Create Elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  // Set structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  // Set content
  headline.textContent = data.headline;
  authorName.textContent = `By ${data.authorName}`;
  img.src = data.authorPhoto;

  // Set Styles
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  return card;
}

const cardsContainer = document.querySelector(".cards-container");

//request
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const bootstrap = response.data.articles.bootstrap,
      javascript = response.data.articles.javascript,
      jquery = response.data.articles.jquery,
      node = response.data.articles.node,
      technology = response.data.articles.node;

    bootstrap.forEach(data => {
      let build = articleCreator(data);
      cardsContainer.appendChild(build);
      console.log(build);
    });

    javascript.forEach(data => {
      let build = articleCreator(data);
      cardsContainer.appendChild(build);
      console.log(build);
    });

    jquery.forEach(data => {
      let build = articleCreator(data);
      cardsContainer.appendChild(build);
      console.log(build);
    });

    node.forEach(data => {
      let build = articleCreator(data);
      cardsContainer.appendChild(build);
      console.log(build);
    });

    technology.forEach(data => {
      let build = articleCreator(data);
      cardsContainer.appendChild(build);
      console.log(build);
    });
  });
