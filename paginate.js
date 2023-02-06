//the main purpose of these function is to determine how many items to be displayed per page

const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  //Array of Arrays-method-Array.from()................newFollowers[followers.slice]
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    //index is the number of arrays in newFollowers
    //Array.from(arrayLike, function (element, index) { /* … */ })
    const start = index * itemsPerPage;
    // console.log(start, index);
    return followers.slice(start, start + itemsPerPage); //rememmber in slice method it does not inclued the last item()
    //for the first page (0,9)[array with 8 index]...and second(1,18)...upto 11 in these case
  });
  console.log(newFollowers);
  return newFollowers;
};

export default paginate;
// method Array.from() lets you create Array s from: iterable objects (objects such as Map and Set ); or, if the object is not iterable, array-like objects (objects with a length property and indexed elements).
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
