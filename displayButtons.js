const displayButtons = (container, pages, activeIndex) => {
  //console.log(container, pages, activeIndex);
  //so we will a setup to check for activeIndex[the index currently active] and pageIndex[pages array indexs]
  let btns = pages.map((_, pageIndex) => {
    //map(function (element, index, array) { /* … */ })
    return `<button class="page-btn ${
      activeIndex === pageIndex ? 'active-btn' : 'null'
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  btns.push('<button class="next-btn">next</button>');
  btns.unshift('<button class="prev-btn">prev</button>');
  //finally join the map
  container.innerHTML = btns.join('');

  console.log(container);
};

export default displayButtons;
//array properties
//push-add item to the end of array
//unshift-add item to the first of array
