export const isObjectEmpty = (someObj) => Object.keys(someObj).length === 0;
export const getRandomPlanetId = () => {
    return Math.floor(Math.random() * 25) + 2
}