window.onblur = function () {
  window.onfocus = function () {
    location.reload(true)
  }
}

function setHeader(page) {

  var ele = document.getElementById("headerJS");

  ele.innerHTML = `
  <div class="headerbuttonarea" id="headerJS">
    <button class="hbutton" id="index" onclick="openPage('index',this)"><img src="resources/logo-small.png" alt="logo-small"></button>
    <button class="hbutton" id="projects" onclick="openPage('projects',this)">PROJECTS</button>
    <button class="hbutton" id="gaming" onclick="openPage('gaming',this)">GAMING</button>
    <button class="hbutton" id="images" onclick="openPage('images',this)">IMAGES</button>
    <button class="hbutton" id="contact" onclick="openPage('contact',this)">CONTACT</button>
  </div>
  `;

  document.getElementById(page).style.borderBottom = "2px solid blue";
}

function openPage(page, ele) {
  window.open(page + ".html", "_self");

  if (!ele.equals("index")) {
    var doc = document.getElementById(ele).style;
    doc.borderBottomWidth = "1px";
    doc.borderBottomColor = "rgb(0, 0, 180)";
  }
}