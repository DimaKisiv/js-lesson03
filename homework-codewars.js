//loop statement --for..in and for..of

function giveMeFive(obj) {
  let fiveWords = [];
  for (let key in obj) {
    if (key.length == 5) {
      fiveWords.push(key);
    }
    if (obj[key].length == 5) {
      fiveWords.push(obj[key]);
    }
  }
  return fiveWords;
}

//Geometry Basics: Circle Circumference in 2D

function circleCircumference(circle) {
  return (circle.radius * 2) * Math.PI;
}

//Number object and its properties

function whatNumberIsIt(n) {
  //coding here
  let rTextPrefix = 'Input number is Number.';
  if (isNaN(n)) {
    return rTextPrefix + 'NaN';
  }
  else if (Number.MAX_VALUE == n) {
    return rTextPrefix + 'MAX_VALUE';
  }
  else if (Number.MIN_VALUE == n) {
    return rTextPrefix + 'MIN_VALUE';
  }
  else if (Number.NEGATIVE_INFINITY == n) {
    return rTextPrefix + 'NEGATIVE_INFINITY';
  }
  else if (Number.POSITIVE_INFINITY == n) {
    return rTextPrefix + 'POSITIVE_INFINITY';
  }
  else {
    return rTextPrefix.replace('Number.', n);
  }
}

//Understanding closures - the basics

function makeReturnNumberCallback(number) {
  return function() {
    return number;
  }
}
function buildFun(n){
	var res = [];
	for (var i = 0; i < n; i++){
		res.push(makeReturnNumberCallback(i));
	}
	return res;
}

//additional let variable

function buildFun(n){
	let res = [];
	for (var i = 0; i < n; i++){
	   let number = i;
	   res.push(function() {
	      return number;
	   });
	}
	return res;
}
