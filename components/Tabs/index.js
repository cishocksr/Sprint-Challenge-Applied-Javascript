// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('.topics');


function newTab(topic) {
    // Create Element

    let tab = document.createElement('div');

    // set attributes
    tab.classList.add('tab');

    // set content
    tab.textContent = topic;

    return tab;
}

// Axios request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        let data = response.data.topics;
        data.forEach((item) => {
            let tabs = newTab(item);
            topics.appendChild(tabs)
        })
})
    
    .catch((error) => {
        console.log(error);
    })
    
        