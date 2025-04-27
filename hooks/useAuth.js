import { useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectUser,
} from '@/redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
