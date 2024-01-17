import { useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectUserName,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
