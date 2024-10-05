import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return user && token ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateRoute;
