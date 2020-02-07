function getFirstSelector(selector){
  const out = document.querySelector(selector);
  console.log('out', out)
  return out
}

function nestedTarget(){
  const out = document.querySelector('#nested').querySelector('.target')
  console.log('out', out)
  return out
}


function increaseRankBy(n) {
  var allNumbers = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < allNumbers.length; i++) {
    allNumbers[i].innerHTML = parseInt(allNumbers[i].innerHTML) + n
  }
}

function deepestChild(){
  var deepestChild;
  deepestChild = document.querySelector('#grand-node div div div div')
  return deepestChild
}

//ANOTHER SOLUTION
/*
function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}
*/
