/* FIFA JS SCRIPT: */

/*=============================================================================

// Websites used for reference:
  // - https://www.ea.com/en/games/ea-sports-fc/ratings
  // - https://www.fifaratings.com/
  // - https://www.fifaindex.com/players/

/*
 * Player object checklist:
 * Each player object should have:
 *   name     {string}    Full name
 *   club     {string}    Club name
 *   position {string}    One of: "ST", "CAM", "CM", "LW", "RW", "CB", "GK"
 *   overall  {number}    Overall rating (0–99)
 *   age      {number}    Age in years
 *   image    {string}    URL to player image (or "" for emoji fallback)
 *   stats    {object}    Six stats used in card and comparison, e.g.:
 *                         { PAC: 96, SHO: 93, PAS: 80, DRI: 91, DEF: 45, PHY: 77 }
 *   isYoungster {bool}  true if age < 23 and should appear on the Youngsters page
 -----------------------------------------------------------------------------------*/
 /* 
 Template for player objects:
{
    name: "Player",
    club: "Club",
    position: "POS",
    overall: 99,
    age: 007,
    image: "https://www.image.com/player",
    stats: { PAC: 96, SHO: 78, PAS: 72, DRI: 91, DEF: 28, PHY: 65 },
    isYoungster: true,
  },
 */

// Players data("base") array:
 const players = [
 
  {
    name: "Kylian Mbappé",
    club: "Real Madrid",
    position: "ST",
    overall: 91,
    age: 26,
    image: "https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg?lm=1",
    stats: { PAC: 97, SHO: 90, PAS: 81, DRI: 92, DEF: 37, PHY: 76 },
    isYoungster: false,
  },
  {
    name: "Mohamed Salah",
    club: "Liverpool",
    position: "RM",
    overall: 91,
    age: 33,
    image: "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2025-09/mohamed-salah-2025-26-body-shot-straight_1eed4e039fbd8ced5f98958fdf8b6235.png?itok=lgsv0p9R",
    stats: { PAC: 89, SHO: 88, PAS: 86, DRI: 90, DEF: 45, PHY: 76 },
    isYoungster: false,
  },
  {
    name: "Jude Bellingham",
    club: "Real Madrid",
    position: "CAM",
    overall: 90,
    age: 22,
    image: "https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/jude-bellingham/assets/BELLINGHAM_EQUIPO_CARITA_380x501_SinParche.png",
    stats: { PAC: 80, SHO: 86, PAS: 83, DRI: 90, DEF: 78, PHY: 85 },
    isYoungster: true,
  },
  {
    name: "Ousmane Dembélé",
    club: "Paris Saint-Germain",
    position: "ST",
    overall: 90,
    age: 28,
    image: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250066886.webp",
    stats: { PAC: 91, SHO: 88, PAS: 83, DRI: 93, DEF: 50, PHY: 69 },
    isYoungster: false,
  },
  {
    name: "Erling Haaland",
    club: "Manchester City",
    position: "ST",
    overall: 90,
    age: 25,
    image: "https://gcp-na-images.contentstack.com/v3/assets/bltea6093859af6183b/bltc1d04771b39041fb/6998c88fe1ba006d9a98dc3c/erling-haaland-soccer.jpg?branch=production",
    stats: { PAC: 86, SHO: 91, PAS: 70, DRI: 80, DEF: 45, PHY: 88 },
    isYoungster: false,
  },
  {
    name: "Rodri",
    club: "Manchester City",
    position: "CDM",
    overall: 90,
    age: 29,
    image: "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/4162/live/6f1ab1d0-361c-11f0-a597-6d65f2e5ecfb.jpg",
    stats: { PAC: 65, SHO: 80, PAS: 86, DRI: 84, DEF: 86, PHY: 85 },
    isYoungster: false,
  },
  {
    name: "Virgil van Dijk",
    club: "Liverpool",
    position: "CB",
    overall: 90,
    age: 34,
    image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/virgil-van-dijk-2526-action-shot_d021d7281d66a6d39e66088d65c27021.webp?itok=fGvmbvRx",
    stats: { PAC: 73, SHO: 60, PAS: 72, DRI: 72, DEF: 90, PHY: 87 },
    isYoungster: false,
  },
  {
    name: "Thibaut Courtois",
    club: "Real Madrid",
    position: "GK",
    overall: 89,
    age: 33,
    image: "https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/thibaut-courtois/assets/COURTOIS_550x650_SinParche.png",
    stats: { PAC: 85, SHO: 89, PAS: 76, DRI: 90, DEF: 46, PHY: 88 },
    isYoungster: false,
  },
  {
    name: "Vinícius Júnior",
    club: "Real Madrid",
    position: "LW",
    overall: 89,
    age: 25,
    image: "https://cdn.britannica.com/45/273345-050-7B263FB8/Vinicius-Junior-Real-Madrid-football-soccer-player-UEFA-league-knockout--play-off-against-Manchester-City-2024-25.jpg",
    stats: { PAC: 95, SHO: 84, PAS: 81, DRI: 91, DEF: 29, PHY: 69 },
    isYoungster: false,
  },
  {
    name: "Raphinha",
    club: "Barcelona",
    position: "LM",
    overall: 89,
    age: 29,
    image: "https://ichef.bbci.co.uk/ace/standard/958/cpsprodpb/6ef6/live/511786a0-fc0f-11ef-beed-093b6e7927e3.jpg",
    stats: { PAC: 91, SHO: 84, PAS: 85, DRI: 87, DEF: 53, PHY: 75 },
    isYoungster: false,
  },
];

/*=============================================================================

/*
 * Team object checklist:
 * Each player object should have:
 * top    = elite teams (Barcelona)
 * notso  = the rest (Arsenal 😬)
 *
 * Each team object:
 *   name    {string}  Team name
 *   logo    {string}  Emoji or image URL (emoji is easiest)
 *   league  {string}  e.g. "La Liga"
 *   rating  {number}  Overall squad rating
 *   squad   {Array}   Array of { name, position, rating } — key players only (6–11)
 /*-----------------------------------------------------------------------------------
 Template for player objects:
{
    name: "FC Barcelona",
      logo: "🔵🔴",
      league: "La Liga",
      rating: 87,
      squad: [
        // TODO: fill in Barcelona's key players
        { name: "Star Striker",  position: "ST",  rating: 91 },
        { name: "Creative Mid",  position: "CAM", rating: 90 },
        { name: "Rock Defender", position: "CB",  rating: 87 },
        { name: "Elite Keeper",  position: "GK",  rating: 88 },
      ],
  },
 */

  const teams = {
    top: [
      {
        name: "FC Barcelona",
        logo: "🔵🔴",
        league: "La Liga",
        rating: 87,
        squad: [
          //TODO: fill in Barcelona's key players
          { name: "Star Striker",  position: "ST",  rating: 91 },
          { name: "Raphinha",  position: "LM", rating: 89 },
          { name: "Rock Defender", position: "CB",  rating: 87 },
          { name: "Elite Keeper",  position: "GK",  rating: 88 },
        ],
      },
      // If I got time, add more top teams
    ],
    notso: [
      {
        name: "Arsenal FC",
        logo: "🔴⚪",
        league: "Premier League",
        rating: 81,
        squad: [
          // TODO: fill in Arsenal's key players
          { name: "Hopeful Striker", position: "ST",  rating: 84 },
          { name: "Energetic Mid",   position: "CM",  rating: 83 },
          { name: "Nervous GK",      position: "GK",  rating: 81 },
        ],
      },
      // If time allows, add notso teams like Manchester United, or Tottenham
    ],
  };


/*=============================================================================
/*=============================================================================*/

// Functions to implement: //

//Map function:
/* Returns the three most relevant stat keys for a given position */
function getDisplayStats(position) {
  const map = {
    ST:  ["PAC", "SHO", "PHY"],
    CAM: ["DRI", "PAS", "SHO"],
    CM:  ["PAS", "DRI", "DEF"],
    LW:  ["PAC", "DRI", "SHO"],
    RW:  ["PAC", "DRI", "SHO"],
    CB:  ["DEF", "PHY", "PAC"],
    GK:  ["DIV", "HAN", "REF"],
  };
  return map[position] || ["PAC", "SHO", "PAS"];
}

//Player card function:
/** Builds the HTML string for a single player card */
function buildPlayerCard(player) {
  const displayStats = getDisplayStats(player.position);
 
  const imageHTML = player.image
    ? `<img src="${player.image}" alt="${player.name}" />`
    : `<span style="font-size:3rem">⚽</span>`;
 
  const statsHTML = displayStats
    .map((key) => {
      const val = player.stats[key] ?? "—";
      return `<div class="pc-stat">
        <span class="pc-stat-val">${val}</span>
        <span class="pc-stat-label">${key}</span>
      </div>`;
    })
    .join("");
 
  return `
    <div class="player-card" data-pos="${player.position}" data-name="${player.name}">
      <div class="pc-top">
        <div class="pc-rating">${player.overall}</div>
        <div class="pc-pos">${player.position}</div>
      </div>
      <div class="pc-img">${imageHTML}</div>
      <div class="pc-name">${player.name}</div>
      <div class="pc-club">${player.club}</div>
      <div class="pc-stats">${statsHTML}</div>
    </div>
  `;
}


//// Lanfing page functions:
function renderFeaturedStrip() {
  const strip = document.getElementById("featured-player-strip");
  if (!strip) return;
  const top8 = [...players].sort((a, b) => b.overall - a.overall).slice(0, 8);
  strip.innerHTML = top8.map(buildPlayerCard).join("");
}
 
//// Players page: all players sorted by overall
function renderPlayerCards() {
  const grid = document.getElementById("player-card-grid");
  if (!grid) return;
  const sorted = [...players].sort((a, b) => b.overall - a.overall);
  grid.innerHTML = sorted.map(buildPlayerCard).join("");
  applyPositionFilter("player-card-grid", "ALL", "result-count");
}
 
/// Youngsters page: only isYoungster: true
function renderYoungsters() {
  const grid = document.getElementById("youngsters-grid");
  if (!grid) return;
  const youngsters = players
    .filter((p) => p.isYoungster)
    .sort((a, b) => b.overall - a.overall);
  grid.innerHTML = youngsters.length
    ? youngsters.map(buildPlayerCard).join("")
    : `<p style="color:var(--text-muted);font-family:var(--font-ui);padding:20px">
        No youngsters found. Add players with isYoungster: true.
       </p>`;
  updateResultCount("youngsters-grid", "result-count");
}


//// Teams page: render team cards with squad lists
function renderTeams() {
  renderTeamGroup("top-teams",   teams.top);
  renderTeamGroup("notso-teams", teams.notso);
}
 
function renderTeamGroup(containerId, teamList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = teamList.map((team) => {
    const playerRows = team.squad.map((p) => `
      <div class="team-player-row">
        <span class="tpr-name">${p.name}</span>
        <span class="tpr-pos">${p.position}</span>
        <span class="tpr-rating">${p.rating}</span>
      </div>
    `).join("");
    return `
      <div class="team-card">
        <div class="team-card-header">
          <div class="team-logo">${team.logo}</div>
          <div>
            <div class="team-name">${team.name}</div>
            <div class="team-league">${team.league}</div>
          </div>
          <div class="team-rating">${team.rating}</div>
        </div>
        <div class="team-card-body">
          <h4>Key Players</h4>
          <div class="team-player-list">${playerRows}</div>
        </div>
      </div>
    `;
  }).join("");
}

/*=============================================================================*/
//// Eevent listeners and page initialization: ////

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  if (body.classList.contains("page-home"))       renderFeaturedStrip();
  if (body.classList.contains("page-players"))    renderPlayerCards();
  if (body.classList.contains("page-youngsters")) renderYoungsters();
  if (body.classList.contains("page-teams"))      renderTeams();
  if (body.classList.contains("page-comparison")) populateComparisonSelects();
});