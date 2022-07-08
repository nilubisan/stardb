export const extractId = (item) => {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
};

export const transformPlanet = (planet) => {
    return {
        id: extractId(planet),
        name: planet.name,
        imgSrc: planet.imgSrc,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
};

export const transformStarship = (starship) => {
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

export const transformPerson = (person) => {
    return {
        id: extractId(person),
        name: person.name,
        height: person.height,
        mass: person.mass,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
    }
};