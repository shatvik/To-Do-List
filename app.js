var input = document.querySelector(".input");
var createbtn = document.querySelector(".create");
var lists = document.querySelector(".lists");
var getWord;
var optionbtn;
var delbtn;
var checkbtn;
var editbtn;
var getlists;
createbtn.addEventListener("click", addElements);
input.addEventListener("keypress", (e) => {
  //   e.preventDefault();
  if (e.key == "Enter" && input.value !== "") {
    createOptions();
  }
  return;
});
function createOptions() {
  getWord = document.createElement("p");
  getWord.textContent = input.value;
  getlists = document.createElement("li");
  getlists.appendChild(getWord);
  lists.appendChild(getlists);
  input.value = "";
  optionbtn = document.createElement("div");
  optionbtn.style.display = "flex";
  optionbtn.style.alignItems = "center";
  optionbtn.style.justifyContent = "space-evenly";
  optionbtn.style.cursor = "pointer";
  delbtn = document.createElement("i");
  delbtn.style.color = "rgb(255,0,0,0.8)";
  delbtn.addEventListener("click", delfunc);
  editbtn = document.createElement("i");
  editbtn.style.color = "rgb(255,255,0)";
  editbtn.addEventListener("click", editfunc);
  checkbtn = document.createElement("i");
  checkbtn.style.color = "rgb(0,255,0,0.8)";
  checkbtn.addEventListener("click", checkfunc);
  delbtn.setAttribute("class", "bx bx-trash");
  editbtn.setAttribute("class", "bx bxs-edit");
  checkbtn.setAttribute("class", "bx bx-check-square");
  optionbtn.appendChild(checkbtn);
  optionbtn.appendChild(editbtn);
  optionbtn.appendChild(delbtn);
  getlists.appendChild(optionbtn);
  getlists.setAttribute("class", "all");
  return;
}
function addElements() {
  if (input.value !== "") {
    createOptions();
  }
  return;
}
function editfunc() {
  var alists = document.querySelectorAll(".all");
  for (var i = 0; i < alists.length; i++) {
    alists[i].querySelector("div").addEventListener("click", function () {
      var change = this.closest(".all").querySelector("p");
      change.contentEditable = true;
      change.style.boxShadow = "0 0 4px 4px rgba(37, 101, 240, 0.2)";
      change.style.padding = "0px 2px";
      change.style.outline = "none";
      change.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
          change.contentEditable = false;
          change.style.boxShadow = "none";
        }
      });
    });
  }
  return;
}
function checkfunc() {
  var alists = document.querySelectorAll(".all");
  for (var i = 0; i < alists.length; i++) {
    alists[i].querySelector("div").addEventListener("click", function (e) {
      var change = this.closest(".all").querySelector("p");
      change.style.textDecoration != "line-through"
        ? (change.style.textDecoration = "line-through")
        : (change.style.textDecoration = "none");
    });
  }
  return;
}
function delfunc() {
  var alists = document.querySelectorAll(".all");
  for (var i = 0; i < alists.length; i++) {
    alists[i].querySelector("div").addEventListener("click", function () {
      this.closest(".all").remove();
    });
  }
  return;
}
