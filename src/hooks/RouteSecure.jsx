
import { Navigate } from 'react-router-dom';
import { useGetLoggedUserQuery } from '../redux/features/baseApi';

const PrivateRoute = ({ children }) => {
  const { data: userInfo, isLoading } = useGetLoggedUserQuery();


  if (isLoading) return <span className="loading loading-bars loading-lg"></span>;

  const hasPaid = userInfo?.subscription?.status === 'active';

  return hasPaid ? children : <Navigate to="/plan" replace />;
};

export default PrivateRoute;
