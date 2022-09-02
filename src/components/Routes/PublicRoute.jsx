import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn && restricted) {
    return <Navigate to="/contacts" />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicRoute;
