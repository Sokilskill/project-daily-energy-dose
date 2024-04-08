import { useNavigate } from 'react-router-dom';
import { Buttons, SignButton } from './SignBtns.styled';

export const SignBtns = () => {
  const navigate = useNavigate();

  return (
    <Buttons>
      <SignButton orange type="button" onClick={() => navigate('signup')}>
        Sign Up
      </SignButton>
      <SignButton type="button" onClick={() => navigate('signin')}>
        Sign In
      </SignButton>
    </Buttons>
  );
};
