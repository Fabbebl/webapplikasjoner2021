const users = require("./util.js");

// TODO: Hent HTML #id med getElementById
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = searchInput.value;
  // TODO: Sjekk om searchName ekisterer
  if (searchName != null) {
    
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
  const searchResult = users.find(o => o.name === searchName);
    
    
    // TODO: Sjekk som resultatet eksisterer
    if (searchResult !== undefined) {
      userUl.innerHTML = null;
      userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
      userUl.innerHTML += `<li><span>${searchResult.id}</span><span>${searchResult.name}</span><span>${searchResult.age}</span></li>`;
      
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = null;
      userUl.innerHTML = '<li>Fant ikke personen</li>'
    }
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
    createTableUI(users);
  }
};

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = filterInput.value;
  // TODO: Sjekk om filterVerdien ekisterer og er et tall
  if (filterValue && Number(filterValue)) {
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = users.filter(o => o.age >= filterValue);
    // TODO: Sjekk om det er noe resultat og at legnden er større enn null
    if (filterResult && filterResult.length > 0) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
      userUl.innerHTML = null;
      userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
      for (const user of filterResult) {
        userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
      }
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = null;
      userUl.innerHTML = '<li>Fant ingen personer</li>'
    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
searchInput.addEventListener("keyup", handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButton.addEventListener("click", handleFilter);
