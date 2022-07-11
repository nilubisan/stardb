export const isObjectEmpty = (someObj) => Object.keys(someObj).length === 0;

export const updateObject = (oldObj, newValues) => {
    return Object.assign({}, oldObj, newValues);
}

