import { useDispatch } from 'react-redux';
import WelcomeLayout from '../../components/WelcomeLayout/WelcomeLayout';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import { logInThunk } from '../../redux/auth/auth-operations';
import {
  SignInPart,
  TextBox,
  Title,
  SignInText,
  OptionText,
  SignUpLink,
} from './SignInPage.styled';

const SignInPage = () => {
  const dispatch = useDispatch();
  const handleFormData = (data) => {
    dispatch(logInThunk(data));
  };

  return (
    <WelcomeLayout>
      <SignInPart>
        <TextBox>
          <Title>Sign In</Title>
          <SignInText>
            Welcome! Please enter your credentials to login to the platform:
          </SignInText>
        </TextBox>
        <SignInForm onSubmit={handleFormData} />
        <OptionText>
          Don’t have an account?
          <span>
            <SignUpLink to="/signup">{` Sign Up`}</SignUpLink>
          </span>
        </OptionText>
      </SignInPart>
    </WelcomeLayout>
  );
};

export default SignInPage;
