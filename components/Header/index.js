// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // Elements
    const
        header = document.createElement('div'),
        date = document.createElement('span'),
        title = document.createElement('h1'),
        temp = document.createElement('span');

    // Set Sturcture
    header.appendChild(date);
    header.appendChild(h1);
    header. appendChild(temp);
    
    // Set Content
    date.textContent = 'Septemeber 15, 2019'
    title.textContent = 'Lambda Times'
    temp.textContent = '98';

    // style Elements
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    return header;
}

const headerContainer = document.querySelector('.header-selector');
headerContainer.appendChild(Header());