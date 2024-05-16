
document.addEventListener('DOMContentLoaded', function () {


    const countryContainer = document.getElementById('countryContainer');
    const sortButton = document.getElementById('sortButton');

    // Fetch country data from API
    async function fetchCountries() {
        try {
            const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            // Return an empty array in case of error
        }
    }

    // Render country cards
    function renderCountries(countries) {
        countryContainer.innerHTML = '';
        countries.forEach(country => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <h2>${country.name}</h2>
            <img src="${country.flag}" alt="${country.name} Flag">
            <p>Population: ${country.population}</p>
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
        `;
            countryContainer.appendChild(card);
        });
    }

    // Sort countries by population
    function sortCountriesByPopulation(data) {
        const countries = data.data;
        return countries.sort((a, b) => b.population - a.population);
    }

    // Event listener for sort button
    sortButton.addEventListener('click', async () => {
        const data = await fetchCountries();
        const sortedCountries = sortCountriesByPopulation(data);
        renderCountries(sortedCountries);
    });

    // Initial load
    (async () => {
        const data = await fetchCountries();
        renderCountries(data.data);
    });

})