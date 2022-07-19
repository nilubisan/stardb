import Login from '../../login';
import { connect } from 'react-redux';
import authService from '../../../services/auth-service/authService'
import tokenService from '../../../services/token-service/tokenService'
import { logoutUser } from '../../../redux/modules/oauth/authorization/actions/actions';

const WithAuth = (logoutUser, WrappedComponent)  => (props) =>  {
    const accessToken = tokenService.getAccessToken();
    if(accessToken) {
        authService.checkAccessToken().then((res) => {
            return res ? <WrappedComponent props={props} /> : <Login />
        });
    }
    return <Login />;
};

const mapDispatchToProps = {
    logoutUser
}

export default connect(null, mapDispatchToProps)(WithAuth);