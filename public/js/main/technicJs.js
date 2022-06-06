import dataTechnicJs from "../../dataPages/dataTechnicJs.js";
export default function () {
  const TechniHTML = dataTechnicJs.map(
    (data) => `
    <div class="card">
    <img src="/public/img/technic/Serie/${data.img}" class="card-img-top" alt="${data.description}">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <a href="${data.link}" target="_blank" class="btn btn-primary">دانلود</a>
    </div>
  </div>
    `
  );
  const technicList = document.getElementById("technic-List");
  technicList.innerHTML = "";
  TechniHTML.map((e) => technicList.insertAdjacentHTML("afterbegin", e));
  //
  const secLeft = document.querySelector(".sec-left");
  let checkerboard = document.getElementById("board");
  checkerboard.innerHTML = "";
  const createBoard = function () {
    for (let i = 0; i < 49; i++) {
      checkerboard.insertAdjacentHTML("afterbegin", "<div></div>");
    }
  };
  createBoard();
  const para = document.createElement("div");
  para.classList.add("checkerboard");
  para.id = "board";
  const src = [
    "/public/img/technic/technic/1.jpg",
    "/public/img/technic/technic/2.jpg",
    "/public/img/technic/technic/3.jpg",
  ];
  let numberURL = 1;
  setInterval(() => {
    checkerboard.remove();
    numberURL === 5 ? (numberURL = 1) : numberURL++;
    para.style.backgroundImage = `url(/public/img/technic/technic/${numberURL}.jpg)`;
    secLeft.appendChild(para);
    checkerboard = document.getElementById("board");
    createBoard();
  }, 8000);
}
