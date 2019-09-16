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

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((results) => {
         
        const bootstrap = results.data.articles.bootstrap;
        const javascript = results.data.articles.javascript;
        const jquery = results.data.articles.jquery;
        const node = results.data.articles.node;
        const technology = results.data.articles.technology;

            bootstrap.forEach((obj) => {
                const newArticle = createArticles(obj);
                cardsContainer.appendChild(newArticle);
            });

            javascript.forEach((obj) => {
                const newArticle = createArticles(obj);
                cardsContainer.appendChild(newArticle);
            });

            jquery.forEach((obj) => {
                const newArticle = createArticles(obj);
                cardsContainer.appendChild(newArticle);
            });

            node.forEach((obj) => {
                const newArticle = createArticles(obj);
                cardsContainer.appendChild(newArticle);
            });

            technology.forEach((obj) => {
                const newArticle = createArticles(obj);
                cardsContainer.appendChild(newArticle);
            });
    });

    function createArticles(obj) {

        // Create Elements
        const card = document.createElement('div');
        const headLine = document.createElement('div');
        const author = document.createElement('div');
        const imgContainer = document.createElement('div');
        const image = document.createElement('img');
        const salute = document.createElement('span');

        // Sturcture
        card.appendChild(headLine);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(image);
        author.appendChild(salute);

        // Content
        headLine.textContent = obj.headline;
        image.src = obj.authorPhoto;
        salute.textConent = obj.authorName;

        // Set Styles
        card.classList.add('card');
        headLine.classList.add('headline');
        author.classList.add('author')
        imgContainer.classList.add('img-container');

        return card;
    }