/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(arr){
   return (arr[0])
 }

function getLastItemFrom(arr){
  return arr[arr.length-1]
}

function getIndex3(arr){
  if (arr.length >=4){
    return arr[3]
  } else {
    return arr[(arr.length-1)]
  }
}

function isLongList(arr){
  return ([arr.length] >=10)
}

function firstItemIsNumber(arr){
  const Num1 = (arr[0]); 
  if (typeof Num1 === 'number'){
    return true
  }else {
    return false
  }
  // or return typeof arr[0] === 'number'
}


function secondCharOfThirdString(arr){
  const Num2 = (arr[2]); 
  if (typeof Num2 === 'string'){
    return (arr[2][1])
}
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
