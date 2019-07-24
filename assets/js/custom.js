window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 50) {
    document.getElementById("top").className = "back-top  fixed";
  } else {
    document.getElementById("top").className = "back-top none";
  }
}