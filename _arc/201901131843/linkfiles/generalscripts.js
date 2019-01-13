function gotoPage(pagename) {
  // Some funky code to change page
  open(pagename + ".html", "_self");

}

window.onblur = function() {
  window.onfocus = function(){
    location.reload(true)
  }
};
