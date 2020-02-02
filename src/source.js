// Original Code
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
// var currentClass = '';
//var currentClass = 'show-front';

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

let rotation = { x: 0, y: 0, z: 0 };

setCubeRotation(rotation);

var selectorUp = document.querySelector('.selector--up');
var selectorLeft = document.querySelector('.selector--left');
var selectorRight = document.querySelector('.selector--right');
var selectorDown = document.querySelector('.selector--down');

// const SideFront = {
//   up: 'top',
//   left: 'left',
//   right: 'right',
//   down: 'bottom'
// };
// const SideLeft = {
//   up: 'top',
//   left: 'back',
//   right: 'front',
//   down: 'bottom'
// };
// const SideBack = {
//   up: 'top',
//   left: 'right',
//   right: 'left',
//   down: 'bottom'
// };
// const SideRight = {
//   up: 'top',
//   left: 'front',
//   right: 'back',
//   down: 'bottom'
// };
// const SideTop = {
//   up: 'back',
//   left: 'left',
//   right: 'right',
//   down: 'front'
// };
// const SideBottom = {
//   up: 'front',
//   left: 'left',
//   right: 'right',
//   down: 'back'
// };
//
// function selectorChangeSide(direction){
//   let tmp = '';
//   switch (currentClass) {
//     case 'show-front':
//       tmp = SideFront[direction];
//       break;
//     case 'show-left':
//       tmp = SideLeft[direction];
//       break;
//     case 'show-back':
//       tmp = SideBack[direction];
//       // if(direction == 'right'){
//       //   tmp = tmp + '-l';
//       // }
//       break;
//     // case 'show-back-r':
//     //   tmp = SideBack[direction];
//     //   break;
//     case 'show-right':
//       tmp = SideRight[direction];
//       // if(direction == 'right'){
//       //   tmp = tmp + '-r';
//       // }
//       break;
//     case 'show-top':
//       tmp = SideTop[direction];
//       break;
//     case 'show-bottom':
//       tmp = SideBottom[direction];
//       break;
//     default:
//
//   }
//   let showClass = 'show-' + tmp;
//   if ( currentClass ){
//     cube.classList.remove(currentClass);
//   }
//   cube.classList.add(showClass);
//   currentClass = showClass;
// }

function setCubeRotation({x, y, z}) {
  console.log(`atempting to rotate x:${x}, y:${y}, z:${z}`)
  cube.style.transform = `translateZ(-100px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

function handleClick(e){
  console.log(`clicked: ${e}`);
  // console.log(`currentSide: ${currentClass}`)
  // console.log(`rotation: ${rotation.x}, ${rotation.y}, ${rotation.z}`)

  switch(e){
    case 'up':
      rotation.x -= 90;
      setCubeRotation(rotation);
      break;
    case 'left':
      rotation.y += 90;
      setCubeRotation(rotation);
      break;
    case 'right':
      rotation.y -= 90;
      setCubeRotation(rotation);
      break;
    case 'down':
      rotation.x += 90;
      setCubeRotation(rotation);
      break;
  }
}


selectorUp.addEventListener( 'click', () => {handleClick('up')} );
selectorLeft.addEventListener( 'click', () => {handleClick('left')} );
selectorRight.addEventListener( 'click', () => {handleClick('right')} );
selectorDown.addEventListener( 'click', () => {handleClick('down')} );

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
