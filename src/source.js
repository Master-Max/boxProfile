// Original Code
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
// var currentClass = '';
var currentClass = 'show-front';

// function changeSide() {
//   var checkedRadio = radioGroup.querySelector(':checked');
//   var showClass = 'show-' + checkedRadio.value;
//   if ( currentClass ) {
//     cube.classList.remove( currentClass );
//   }
//   cube.classList.add( showClass );
//   currentClass = showClass;
// }
// // set initial side
// changeSide();
//
// radioGroup.addEventListener( 'change', changeSide );

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////


// New Code
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

var selectorUp = document.querySelector('.selector--up');
var selectorLeft = document.querySelector('.selector--left');
var selectorRight = document.querySelector('.selector--right');
var selectorDown = document.querySelector('.selector--down');

const SideFront = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};
const SideLeft = {
  up: 'top',
  left: 'back',
  right: 'front',
  down: 'bottom'
};
const SideBack = {
  up: 'top',
  left: 'right',
  right: 'left',
  down: 'bottom'
};
const SideRight = {
  up: 'top',
  left: 'front',
  right: 'back',
  down: 'bottom'
};
const SideTop = {
  up: 'back',
  left: 'left',
  right: 'right',
  down: 'front'
};
const SideBottom = {
  up: 'front',
  left: 'left',
  right: 'right',
  down: 'back'
};

function selectorChangeSide(direction){
  let tmp = '';
  switch (currentClass) {
    case 'show-front':
      tmp = SideFront[direction];
      break;
    case 'show-left':
      tmp = SideLeft[direction];
      break;
    case 'show-back':
      tmp = SideBack[direction];
      break;
    case 'show-right':
      tmp = SideRight[direction];
      break;
    case 'show-top':
      tmp = SideTop[direction];
      break;
    case 'show-bottom':
      tmp = SideBottom[direction];
      break;
    default:

  }
  let showClass = 'show-' + tmp;
  if ( currentClass ){
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}


function handleClick(e){
  console.log(`clicked: ${e}`);
  console.log(`currentSide: ${currentClass}`)
  selectorChangeSide(e);
  // switch(e){
  //   case 'up':
  //     selectorChangeSide('up');
  //     break;
  //   case 'left':
  //     break;
  //   case 'right':
  //     break;
  //   case 'down':
  //     break;
  // }
}


selectorUp.addEventListener( 'click', () => {handleClick('up')} );
selectorLeft.addEventListener( 'click', () => {handleClick('left')} );
selectorRight.addEventListener( 'click', () => {handleClick('right')} );
selectorDown.addEventListener( 'click', () => {handleClick('down')} );

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
