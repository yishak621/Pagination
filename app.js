import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

//declaration
const sectionTitle = document.querySelector('.section-title h1'); //means h1 in a section title
const btnContainer = document.querySelector('.btn-container');

let index = 0; //pages number activeIndex
let pages = []; //array of arrays

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index); //index is nessecory to determine which one is active page
};

//API docmentation ..we want to grap a person username[login],user avatar[avatar_url],git link[url]
const init = async () => {
  const followers = await fetchFollowers();
  sectionTitle.textContent = 'Pagination';
  pages = paginate(followers);
  setupUI();
  //console.log(pages);
};

//Btns event listner
btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return; //to prevent reloading when we click the space between btns
  if (e.target.classList.contains('page-btn')) {
    //for the number btns-redeclaring index
    index = parseInt(e.target.dataset.index);
  }
  //PREV-btn and NEXT-btn
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  } else if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

window.addEventListener('load', init);

//displayFollowers(paginate(followers)[0]); //the [0] is refers to which page to start
