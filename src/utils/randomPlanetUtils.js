export const getRandomPlanetId = () => {
    return Math.floor(Math.random() * 25) + 2
}

export const transformPeriodToPeriodOption = (period) => {
    const label = period >= 60000 ? `${period / 60000} min` : `${period / 1000} sec`;
    return {value: period, label};
}

export const getRefreshPeriodOptions = (periodsArray) => {
    return periodsArray.map((period) => {
        return transformPeriodToPeriodOption(period);
    })
}