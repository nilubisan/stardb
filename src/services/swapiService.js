const GET_ALL_PEOPLE_PATH = "people";
const GET_ALL_PLANETS_PATH = "planets";
const GET_ALL_STARSHIPS = "starships";

class SwapiService {
    _apiBase = 'https://swapi.dev/api/';

    async getResource(url) {
        const fetchURL = `${ this._apiBase }${ url }`;
        const res = await fetch(fetchURL);
        if(!res.ok) {
            throw new Error(`Could not fetch ${ url } received ${ res.status }`);
        }
        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(GET_ALL_PEOPLE_PATH);
        return res.results.map(this._transformPerson);
    };

    async getPerson(id) {
        const url = `people/${ id }`;
        const person = await this.getResource(url);
        return this._transformPerson(person);
    };

    async getAllPlanets() {
        const res = await this.getResource(GET_ALL_PLANETS_PATH);
        return res.results.map(this._transformPlanet);
    };

    async getPlanet(id) {
        const url = `planets/${ id }`
        const planet = await this.getResource(url);
        return this._transformPlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getResource(GET_ALL_STARSHIPS);
        return res.results.map(this._transformStarship);
    };

    async getStarship(id) {
        const url = `starships/${ id }`;
        const starship = await this.getResource(url);
        return this._transformStarship(starship);
    };

    _extractId(item) {
        const idRegExp = /\/(\d*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
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

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

};

export default SwapiService;