import {isObjectEmpty} from '../utils/randomPlanetUtils'

const GET_ALL_PEOPLE_PATH = "people";
const GET_ALL_PLANETS_PATH = "planets";
const GET_ALL_STARSHIPS = "starships";
const API_BASE_URL = 'https://swapi.dev/api/';
const  API_GET_IMG_URL = 'https://starwars-visualguide.com/assets/img/';
const API_PLACEHOLDER_IMG_URL = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';

const extractId = (item) => {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
};

const transformPlanet = (planet) => {
    return {
        id: extractId(planet),
        name: planet.name,
        imgSrc: planet.imgSrc,
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
    async getResource(url, params) {
        if( !params || isObjectEmpty(params)) {
            const fetchURL = `${ API_BASE_URL }${ url }`;
            const res = await fetch(fetchURL);
            if(!res.ok) {
                throw new Error(`Could not fetch ${ url } received ${ res.status }`);
            }
            return await res.json();
        } else {
            if(params.checkIsAvailable) {
                const fetchURL = `${ API_GET_IMG_URL }${ url }`;
                const res = await fetch(fetchURL);
                return res.status !== 404;
            }
        }

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
        const url = `planets/${ id }`;
        const planet = await this.getResource(url);
        const imgLoadStatus = await this.getResource(`planets/${id}.jpg`, {checkIsAvailable: true});
        planet.imgSrc = imgLoadStatus ? (API_GET_IMG_URL + `planets/${id}.jpg`) : API_PLACEHOLDER_IMG_URL;
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