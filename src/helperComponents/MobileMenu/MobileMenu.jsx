import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { UserNav } from '../UserNav/UserNav';

export const MobileMenu = () => {
  return (
    <div>
      <button>close X</button>

      <UserNav />
      <LogOutBtn />
    </div>
  );
};
