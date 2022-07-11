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
        crew: starship.crew,
        maxAtmospheringSpeed: starship.max_atmosphering_speed,
        cargoCapacity: starship.cargo_capacity,
        passengers: starship.passengers,
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