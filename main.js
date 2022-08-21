

// const fetchAPI{
// //    fetch from API
// }

// calls function on page load
window.onload = function() {
    getBreweries();
}

// this function fetches the breweries
const getBreweries = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb85153293msh4e4af2f7a4897f2p146609jsn3b83daa74b08',
            'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
        }
    }

    fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
            // for (const brew of getBreweries().res) {
            //     for(let i = 0; i < brew.length - i; i++) {
            //         const listItem = document.createElement('li');
            //         listItem.appendChild(
            //             document.createElement('strong')
            //         ).textContent = `Breweries Name: ${brew.name}`
            //     }
            // }
    console.log(getBreweries)
    // console.log(options)

    fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=NY&by_name=cooper&by_type=micro&by_tag=patio', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/autocomplete?query=dog', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    fetch('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=dog', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


};

