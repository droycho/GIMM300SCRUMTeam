$(document).ready(function() {
  window.onscroll = function() {scrollFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function scrollFunction(){
    if (window.pageYOffset > sticky){
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

})

// problem with the navbar distoring horribly
// when scrollFunction is called. needs to be adjusted.
