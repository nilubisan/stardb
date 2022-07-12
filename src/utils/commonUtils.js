import { starshipsAllowedIDsforAPI} from './constants'

export const isObjectEmpty = (someObj) => Object.keys(someObj).length === 0;

export const updateObject = (oldObj, newValues) => {
    return Object.assign({}, oldObj, newValues);
}

export const getRandomEntityId = (entityName) => {
    let maxValue;
    switch (entityName) {
        case "planets":
            maxValue = 60;
            break;
        case "persons":
            maxValue = 82;
            break;
        case "starships":
            maxValue = 75;
            break;
        default:
            return false;
    }
    const result = Math.floor(Math.random() * maxValue) + 1;
    if(entityName !=="starships") return result;
    else {
        const ind = Math.floor(Math.random() * starshipsAllowedIDsforAPI.length);
        return starshipsAllowedIDsforAPI[ind];
    }
};