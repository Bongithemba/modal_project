// Get the modal
var fmamodal = document.getElementById("fmaModal");
var hxhModal = document.getElementById("hxhModal");
var berserkModal = document.getElementById("berserk-modal");
var narutoModal = document.getElementById("naruto-modal");
var kaijuModal = document.getElementById("kaiju-modal");
var danModal = document.getElementById("dan-modal");
var opmModal = document.getElementById("opm-modal");
var jjkModal = document.getElementById("jjk-modal");

// Get the button that opens the modal
var fma = document.getElementById("fma");
var hxh = document.getElementById("hxh");
var berserk = document.getElementById("berserk");
var naruto = document.getElementById("naruto");
var kaiju = document.getElementById("kaiju");
var dan = document.getElementById("dan");
var opm = document.getElementById("opm");
var jjk = document.getElementById("jjk");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
fma.onclick = function() {
  fmamodal.style.display = "block";
}
hxh.onclick = function() {
  hxhModal.style.display = "block";
}
berserk.onclick = function() {
  berserkModal.style.display = "block";
}
naruto.onclick = function() {
  narutoModal.style.display = "block";
}
kaiju.onclick = function() {
  kaijuModal.style.display = "block";
}
dan.onclick = function() {
  danModal.style.display = "block";
}
opm.onclick = function() {
  opmModal.style.display = "block";
}
jjk.onclick = function() {
  jjkModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  fmamodal.style.display = "none";
  hxhModal.style.display = "none";
  berserkModal.style.display = "none";
  narutoModal.style.display = "none";
  kaijuModal.style.display = "none";
  danModal.style.display = "none";
  opmModal.style.display = "none";
  jjkModal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == fmamodal) {
    fmamodal.style.display = "none";
  }
  if (event.target == hxhModal) {
    hxhModal.style.display = "none";
  }
  if (event.target == berserkModal) {
    berserkModal.style.display = "none";
  }
  if (event.target == narutoModal) {
    narutoModal.style.display = "none";
  }
  if (event.target == kaijuModal) {
    kaijuModal.style.display = "none";
  }
  if (event.target == danModal) {
    danModal.style.display = "none";
  }
  if (event.target == opmModal) {
    opmModal.style.display = "none";
  }
  if (event.target == jjkModal) {
    jjkModal.style.display = "none";
  }
}