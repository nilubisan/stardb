const GET_ALL_PEOPLE_PATH = "people";
const GET_ALL_PLANETS_PATH = "planets";
const GET_ALL_STARSHIPS = "starships";

class SwapiService {
    _apiBase = 'https://swapi.dev/api/';

    async getResource(url) {
        const fetchURL = `${this._apiBase}${url}`;
        const res = await fetch(fetchURL);
        if(!res.ok) {
            throw new Error(`Could not fetch ${ url } received ${ res.status }`);
        }
        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(GET_ALL_PEOPLE_PATH);
        return res.results;
    };

    async getPerson(id) {
        const url = `${this._apiBase}people/${id}`;
        return this.getResource(url);
    };

    async getAllPlanets() {
        const res = await this.getResource(GET_ALL_PLANETS_PATH);
        return res.results;
    }

    getPlanet(id) {
        const url = `${this._apiBase}planets/${id}`;
        return this.getResource(url);
    }

    async getAllStarships() {
        const res = await this.getResource(GET_ALL_STARSHIPS);
        return res.results;
    };

    getStarship(id) {
        const url = `${this._apiBase}starships/${id}`;
        return this.getResource(url);
    };
}