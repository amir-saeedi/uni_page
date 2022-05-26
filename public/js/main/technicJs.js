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
}
