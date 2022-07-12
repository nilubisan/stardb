
import {isObjectEmpty} from '../utils/commonUtils'
import { transformStarship, transformPlanet, transformPerson } from '../utils/swapiServiceUtils'
import {getRandomEntityId} from '../utils/commonUtils';

// CONSTANTS
const GET_ALL_PLANETS_PATH = "planets";
const GET_ALL_STARSHIPS = "starships";
const API_BASE_URL = 'https://swapi.dev/api/';
const  API_GET_IMG_URL = 'https://starwars-visualguide.com/assets/img/';
const API_PLACEHOLDER_IMG_URL = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';

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

    async _getValidImageSrc(params) {
        const {entity, id} = params;
        const imgLoadStatus = await this.getResource(`${entity}/${id}.jpg`, {checkIsAvailable: true});
        return imgLoadStatus ? (API_GET_IMG_URL + `${entity}/${id}.jpg`) : API_PLACEHOLDER_IMG_URL;
        
    },

    async getPersonsByPageNumber(pageNumber) {
        const res = await this.getResource(`people/?page=${pageNumber}`);
        const persons = await Promise.all(res.results.map(async (person) => {
            const transformedPerson = transformPerson(person);
            transformedPerson.imgSrc = await this._getValidImageSrc({entity:"characters", id: transformedPerson.id});
            return transformedPerson;
        }))
        return {
            pageCount: res.count, persons
        }
    },

    async getStarshipsByPageNumber(pageNumber) {
        const res = await this.getResource(`starships/?page=${pageNumber}`);
        const starships = await Promise.all(res.results.map(async (starship) => {
            const transformedStarship = transformStarship(starship);
            transformedStarship.imgSrc = await this._getValidImageSrc({entity:"starships", id: transformedStarship.id});
            return transformedStarship;
        }))
        return {
            pageCount: res.count, starships
        }
    },

    async getPlanetsByPageNumber(pageNumber) {
        const res = await this.getResource(`planets/?page=${pageNumber}`);
        const planets = await Promise.all(res.results.map(async (planet) => {
            const transformedPlanet = transformPlanet(planet);
            transformedPlanet.imgSrc = await this._getValidImageSrc({entity:"planets", id: transformedPlanet.id});
            return transformedPlanet;
        }))
        return {
            pageCount: res.count, planets
        }
    },

    async getPersonById(id) {
        const url = `people/${ id }`;
        const person = await this.getResource(url);
            const transformedPerson = transformPerson(person);
            transformedPerson.imgSrc = await this._getValidImageSrc({entity:"persons", id: transformedPerson.id});
            return transformedPerson;
    },

    async getStarshipById(id) {
        const url = `starships/${ id }`;
        const starship = await this.getResource(url);
        const transformedStarship = transformStarship(starship);
        transformedStarship.imgSrc = await this._getValidImageSrc({entity:"starships", id: transformedStarship.id});
        return transformedStarship;
    },

    async getPlanetById(id) {
        const url = `planets/${ id }`;
        const planet = await this.getResource(url);
        const transformedPlanet = transformPlanet(planet);
        transformedPlanet.imgSrc = await this._getValidImageSrc({entity: "planets", id});
        return transformedPlanet;
    },

};

export default swapiService;