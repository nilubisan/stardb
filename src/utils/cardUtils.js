export const transformEntityToUniqueFeatures = (entity) => {
    console.log(entity)
    const transformedFeatures = {}
    Object.keys(entity).forEach((property) => {
        if(!["id", "name", "imgSrc"].includes(property)) {
            transformedFeatures[property] = entity[property]
        }
    });
    return transformedFeatures;
}