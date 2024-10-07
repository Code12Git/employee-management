import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (user && token && user.role === 'admin') {
        return children;
    } else {
        return <Navigate to="/admin" />;
    }
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateRoute;
