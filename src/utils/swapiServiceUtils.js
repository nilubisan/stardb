export const extractId = (item) => {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
};

export const transformPlanet = (planet) => {
    return {
        id: extractId(planet),
        name: planet.name,
        "Population": planet.population,
        "Rotation period": planet.rotation_period,
        "Diameter": planet.diameter
    }
};

export const transformStarship = (starship) => {
    return {
        id: extractId(starship),
        name: starship.name,
        "Crew": starship.crew,
        "Max atmosphering speed": starship.max_atmosphering_speed,
        "Cargo capacity": starship.cargo_capacity,
        "Passengers": starship.passengers,
    }
};

export const transformPerson = (person) => {
    return {
        id: extractId(person),
        name: person.name,
        "Height": person.height,
        "Mass": person.mass,
        "Gender": person.gender,
        "Birth Year": person.birth_year,
        "Eye Color": person.eye_color
    }
};