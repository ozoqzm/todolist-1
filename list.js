let addButton = document.getElementById("addButton");
let tdContainer = document.getElementById("tdContainer");
let textInput = document.getElementById("textInput");

addButton.addEventListener("click", function () {
  // p 태그 생성
  let paragraph = document.createElement("p");
  paragraph.innerText = textInput.value;
  paragraph.classList.add("paragraph-style"); // 리스트 클래스 추가

  // child에 p 태그 추가
  tdContainer.appendChild(paragraph);

  // 다시 empty text로 변경
  textInput.value = "";
  textInput.focus();

  paragraph.addEventListener("click", function () {
    // 클릭시 밑줄
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    //두번클릭이벤트
    tdContainer.removeChild(paragraph);
  });
});
