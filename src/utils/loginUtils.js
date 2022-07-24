export const getMessageOnInvalidInputData = () => {
    return 'Unable to login. Either username or password is incorrect'
}


export const validateInput = (username, password) => {
    return (
        (username.length < 3) ||
        (password.length < 6) ||
        !(password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
        ))
    ) ? getMessageOnInvalidInputData() : null

}