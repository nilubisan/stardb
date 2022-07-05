const GET_ALL_PEOPLE_PATH = "people";
const GET_ALL_PLANETS_PATH = "planets";
const GET_ALL_STARSHIPS = "starships";
const apiBase = 'https://swapi.dev/api/';

const extractId = (item) => {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
};

const transformPlanet = (planet) => {
    return {
        id: extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
};

const transformStarship = (starship) => {
    return {
        id: extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
    }
};

const transformPerson = (person) => {
    return {
        id: extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
    }
};

const swapiService = {
    async getResource(url) {
        const fetchURL = `${ apiBase }${ url }`;
        const res = await fetch(fetchURL);
        if(!res.ok) {
            throw new Error(`Could not fetch ${ url } received ${ res.status }`);
        }
        return await res.json();
    },

    async getAllPeople() {
        const res = await this.getResource(GET_ALL_PEOPLE_PATH);
        return res.results.map(transformPerson);
    },

    async getPerson(id) {
        const url = `people/${ id }`;
        const person = await this.getResource(url);
        return transformPerson(person);
    },

    async getAllPlanets() {
        const res = await this.getResource(GET_ALL_PLANETS_PATH);
        return res.results.map(transformPlanet);
    },

    async getPlanet(id) {
        const url = `planets/${ id }`
        const planet = await this.getResource(url);
        return transformPlanet(planet);
    },

    async getAllStarships() {
        const res = await this.getResource(GET_ALL_STARSHIPS);
        return res.results.map(transformStarship);
    },

    async getStarship(id) {
        const url = `starships/${ id }`;
        const starship = await this.getResource(url);
        return transformStarship(starship);
    },
};

export default swapiService;