const countries = [
    {
        name: "Україна",
        capital: "Київ",
        flag: "https://flagcdn.com/w320/ua.png",
        continent: "Europe"
    },
    {
        name: "Франція",
        capital: "Париж",
        flag: "https://flagcdn.com/w320/fr.png",
        continent: "Europe"
    },
    {
        name: "Німеччина",
        capital: "Берлін",
        flag: "https://flagcdn.com/w320/de.png",
        continent: "Europe"
    },

    {
        name: "Єгипет",
        capital: "Каїр",
        flag: "https://flagcdn.com/w320/eg.png",
        continent: "Africa"
    },

    {
        name: "США",
        capital: "Вашингтон",
        flag: "https://flagcdn.com/w320/us.png",
        continent: "Americas"
    },
    {
        name: "Канада",
        capital: "Оттава",
        flag: "https://flagcdn.com/w320/ca.png",
        continent: "Americas"
    },
    {
        name: "Мексика",
        capital: "Мехіко",
        flag: "https://flagcdn.com/w2560/mx.png",
        continent: "Americas"
    },
    {
        name: "Австралія",
        capital: "Канберра",
        flag: "https://flagcdn.com/w320/au.png",
        continent: "Oceania"
    },

];
function displayCountries(list) {
    const countriesContainer = document.getElementById("countries-list");
    countriesContainer.innerHTML = "";
    list.forEach(country => {
        const countryHTML = `
            <div class="country" data-continent="${country.continent}">
                <img src="${country.flag}" alt="${country.name}">
                <span>${country.name} - ${country.capital}</span>
            </div>
        `;
        countriesContainer.innerHTML += countryHTML;
    });
}
function filterCountries() {
    const search = document.getElementById("search").value.toLowerCase();
    const continent = document.getElementById("continent").value;
    const filtered = countries.filter(country => {
        const nameMatch = country.name.toLowerCase().includes(search);
        const continentMatch = continent === "" || country.continent === continent;
        return nameMatch && continentMatch;
    });

    displayCountries(filtered);
}
displayCountries(countries);
document.getElementById("search").addEventListener("input", filterCountries);
document.getElementById("continent").addEventListener("change", filterCountries);