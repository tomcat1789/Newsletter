var rotated = false;
function toggleMenu() {
  var div1 = document.getElementById('o-hamburger__div1');
  var div2 = document.getElementById('o-hamburger__div2');
  var div3 = document.getElementById('o-hamburger__div3');
  var check = document.getElementById("toggle").checked;

  if(rotated == false) {
    div1.style.transform = 'translate(0px, 10px) rotate(45deg)';
    div2.style.transform = 'rotate(45deg)';
    div3.style.transform = 'translate(0px, -10px) rotate(-45deg)';

    rotated = true;
  } else {
    div1.style.transform = 'rotate(0deg)';
    div2.style.transform = 'rotate(0deg)';
    div3.style.transform = 'rotate(0deg)';

    rotated = false;
  }
}

// function resetMenu() {
//   var check = document.getElementById("toggle").checked;
//
//   check = false;
//   rotated = false;
//   if(performance.navigation.type == 2){
//    location.reload(true);
//   }
// }
