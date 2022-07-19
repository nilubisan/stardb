import Login from '../../login';
import authService from '../../../services/auth-service/authService'
import tokenService from '../../../services/token-service/tokenService'

const WithAuth = (WrappedComponent)  => (props) =>  {
    const accessToken = tokenService.getAccessToken();
    if(accessToken) {
        authService.checkAccessToken().then((res) => {
            return res ? <WrappedComponent props /> : <Login />
        });
    }
    return <Login />;
};

export default WithAuth;