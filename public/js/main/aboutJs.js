import {
  dataHeaderTeam,
  dataAllTeam,
  dataHonors,
} from "../../dataPages/dataAboutPage.js";

export default function () {
  // html code header team
  // //  Head team
  const headerTeam = `
    <div class="row" style="margin-top:30px;">
      <div class="col-sm-6">
        <!-- normal -->
        <div class="ih-item circle effect4 bottom_to_top"><a href="${dataHeaderTeam.link}">
            <div class="img"><img src="/public/img/about/team/${dataHeaderTeam.img}" alt="${dataHeaderTeam.name}"></div>
            <div class="info">
              <h3>${dataHeaderTeam.name}</h3>
              <p></p>
            </div>
          </a></div>
        <!-- end normal -->
      </div>
      <p class="row_header">${dataHeaderTeam.description}</p>
    </div>
    `;
  console.log(headerTeam);
  const teamHead = document.getElementById("team_header");
  teamHead.innerHTML = "";
  teamHead.insertAdjacentHTML("afterbegin", headerTeam);
  // // body team
  const bodyTeam = dataAllTeam.map(
    (data) => `
    <article>
    <div class="row">
      <div class="col-sm-6 m-5">
        <div class="ih-item circle colored effect1"><a href="${data.link}">
            <div class="spinner"></div>
            <div class="img"><img src="/public/img/about/team/${data.img}" alt="${data.name}"></div>
            <div class="info">
              <div class="info-back">
                <h3>${data.description}</h3>
                <p></p>
              </div>
            </div>
          </a></div>
      </div>
      <div class="team_description">
        <h5>${data.name}</h5>
      </div>
    </div>
    </article>
    `
  );
  const TeamB = document.getElementById("team_body");
  TeamB.innerHTML = "";
  bodyTeam.map((e) => TeamB.insertAdjacentHTML("beforeend", e));
  // honors
  const honorHTML = dataHonors.map(
    (data) =>
      `
    <p class="hvr-underline-from-right"><span>-</span>${data.honor}.</p>
    <br>
  `
  );
  const honor = document.getElementById("Honors");
  honor.innerHTML = "";
  honorHTML.map((e) => honor.insertAdjacentHTML("beforeend", e));
}
