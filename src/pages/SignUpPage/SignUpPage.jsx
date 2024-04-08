import WelcomeLayout from '../../components/WelcomeLayout/WelcomeLayout';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth-operations';
import {
  SignUpPart,
  TextBox,
  Title,
  Text,
  OptionText,
  SignInLink,
} from './SignUpPage.styled';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const handleFormData = (data) => {
    dispatch(registerThunk(data));
  };

  return (
    <WelcomeLayout>
      <SignUpPart>
        <TextBox>
          <Title>Sign Up</Title>
          <Text>
            Thank you for your interest in our platform. To complete the
            registration process, please provide us with the following
            information.
          </Text>
        </TextBox>
        <SignUpForm onSubmit={handleFormData} />
        <OptionText>
          Already have an account?
          <span>
            <SignInLink to="/signin">{`  Sign In`}</SignInLink>
          </span>
        </OptionText>
      </SignUpPart>
    </WelcomeLayout>
  );
};

export default SignUpPage;
