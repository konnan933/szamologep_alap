window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function init() {
  generalas();
}
var muvjel = "";
function generalas() {
  var txt = "";
  for (let index = 0; index < 10; index++) {
    txt += `<button id="${index}">${index}</button>`;
  }
  ID("szamok").innerHTML = txt;
  for (let index = 0; index < 10; index++) {
    ID(index).addEventListener("click", kattintas);
  }
  var muveletek = $("#muvjelek");
  for (let index = 0; index < muveletek.length; index++) {
    ID(muveletek[index].id).addEventListener("click", kattintas);
  }
}
function kattintas() {
  katInner = "";
  katInner = event.target.innerHTML;
  //console.log(katInner);
  if (
    katInner === "+" ||
    katInner === "-" ||
    katInner === "/" ||
    katInner === "*"
  ) {
    muvjel = katInner;
    console.log(muvjel);
  }
  if (katInner === "=") {
    kij.split(muvjel);
  }
  if(katInner === "C"){
    ID("kijelzo").innerHTML = "";
    katInner = "";
  }
  
  var kij = (ID("kijelzo").innerHTML += katInner);
}
