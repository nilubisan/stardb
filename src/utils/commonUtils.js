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
            maxValue = 36;
            break;
        default:
            return false;
    }
    return Math.floor(Math.random() * maxValue);
};