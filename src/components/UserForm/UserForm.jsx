import { Formik, ErrorMessage, Field } from 'formik';
import { ProfileSchema } from './YupSchemas';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addUserData } from '../../redux/profileSettings/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../redux/profileSettings/selectors';

import {
  CurrentWeightInput,
  DesiredWeightInput,
  ErrorMessageStyled,
  HeightInput,
  Label,
  MainContainer,
  MainFormContainer,
  ProfileCalendarWrapper,
  ProfileContainer,
  ProfileWrapper,
  SaveButton,
  UserContainer,
  UserInput,
  DesiredWeight,
  EmailWrapper,
  ProfileCalendarInput,
} from './UserForm.styled';

import sprite from '../../assets/sprite.svg';
import { RadioInput } from './RadioInput';

import BirthdayPicker from '../../helperComponents/DatePicker/DatePicker';
import { selectUser } from '../../redux/auth/auth-selectors';

export const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userProfile = useSelector(selectUserProfile);

  const handleSubmit = async (values) => {
    try {
      // Dispatch the action
      await dispatch(addUserData(values));
  
      // Log success message
      console.log('Profile updated successfully');
  
      // Notify user about successful update
      toast.success('Profile updated successfully');
    } catch (error) {
      // Log and notify about the error
      console.error('Error updating profile:', error);
      toast.error('An error occurred while updating the profile');
    }
  };

  const initialValues = {
    name: user.mane || '',
    email: user.email || '',
    height: userProfile.height || '',
    currentWeight: userProfile.currentWeight || '',
    desiredWeight: userProfile.desiredWeight || '',
    birthday: userProfile.birthday || new Date().toISOString(),
    blood: String(userProfile.blood) || '1',
    sex: userProfile.sex || '',
    levelActivity: String(userProfile.levelActivity) || '1',
  };

  

  return (
    <MainContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <MainFormContainer autoComplete="off" onSubmit={handleSubmit}>
            <UserContainer>
              <div
                style={{
                  borderColor: touched.name
                    ? errors.name
                      ? 'var(--error-color, #d80027)'
                      : ''
                    : '',
                }}
              >
                <Label>Name</Label>
                <div style={{ position: 'relative' }}>
                  <UserInput
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    placeholder="Name"
                    aria-label="Name Input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                      borderColor: touched.name
                        ? errors.name
                          ? 'var(--error-color, #d80027)'
                          : ''
                        : '',
                    }}
                  />
                </div>
                <div style={{ position: 'relative' }}>
                  {errors.name && touched.name && (
                    <svg
                      style={{
                        width: '16px',
                        height: '16px',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <use
                        href={`${sprite}#checkbox-circle`}
                        style={{ fill: 'var(--error-color, #d80027)' }}
                      />
                    </svg>
                  )}
                  <ErrorMessage name="name" component={ErrorMessageStyled} />
                </div>
              </div>

              <EmailWrapper
                style={{
                  borderColor: touched.name
                    ? errors.name
                      ? 'var(--error-color, #d80027)'
                      : ''
                    : '',
                }}
              >
                <Label>Email</Label>
                <UserInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  style={{
                    borderColor: touched.name
                      ? errors.name
                        ? 'var(--error-color, #d80027)'
                        : ''
                      : '',
                  }}
                />

                <div style={{ position: 'relative' }}>
                  {errors.email && touched.email && (
                    <svg
                      style={{
                        width: '16px',
                        height: '16px',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <use
                        href={`${sprite}#checkbox-circle`}
                        style={{ fill: 'var(--error-color, #d80027)' }}
                      />
                    </svg>
                  )}
                  <ErrorMessage name="email" component={ErrorMessageStyled} />
                </div>
              </EmailWrapper>
            </UserContainer>
            <ProfileContainer>
          <ProfileWrapper>
            <div
              style={{
                borderColor: touched.height
                  ? errors.height
                    ? 'var(--error-color, #d80027)'
                    : ''
                  : '',
              }}
            >
              <Label>Height</Label>
              <HeightInput
                type="number"
                id="height"
                name="height"
                placeholder="0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.height}
                required
                style={{
                  borderColor: touched.height
                    ? errors.height
                      ? 'var(--error-color, #d80027)'
                      : ''
                    : '',
                }}
              />
              <div style={{ position: 'relative' }}>
                {errors.height && touched.height && (
                  <svg
                    style={{
                      width: '16px',
                      height: '16px',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    <use
                      href={`${sprite}#checkbox-circle`}
                      style={{ fill: 'var(--error-color, #d80027)' }}
                    />
                  </svg>
                )}
                <ErrorMessage name="height" component={ErrorMessageStyled} />
              </div>
            </div>

            <div
              style={{
                borderColor: touched.currentWeight
                  ? errors.currentWeight
                    ? 'var(--error-color, #d80027)'
                    : ''
                  : '',
              }}
            >
              <Label>Current Weight</Label>
              <CurrentWeightInput
                type="number"
                id="currentWeight"
                name="currentWeight"
                placeholder="0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.currentWeight}
                required
                style={{
                  borderColor: touched.currentWeight
                    ? errors.currentWeight
                      ? 'var(--error-color, #d80027)'
                      : ''
                    : '',
                }}
              />
              <div style={{ position: 'relative' }}>
                {errors.currentWeight && touched.currentWeight && (
                  <svg
                    style={{
                      width: '16px',
                      height: '16px',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    <use
                      href={`${sprite}#checkbox-circle`}
                      style={{ fill: 'var(--error-color, #d80027)' }}
                    />
                  </svg>
                )}
                <ErrorMessage
                  name="currentWeight"
                  component={ErrorMessageStyled}
                />
                  </div>
                </div>
              </ProfileWrapper>
              <ProfileCalendarWrapper>
                <DesiredWeight style={{
                borderColor: touched.desiredWeight
                  ? errors.desiredWeight
                    ? 'var(--error-color, #d80027)'
                    : ''
                  : '',
              }}>
                  <Label>Desired Weight</Label>
                  <DesiredWeightInput
                    type="number"
                    id="desiredWeight"
                    name="desiredWeight"
                    placeholder="0"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.desiredWeight}
                    required
                    style={{
                      borderColor: touched.desiredWeight
                        ? errors.desiredWeight
                          ? 'var(--error-color, #d80027)'
                          : ''
                        : '',
                    }}
                  />
                 <div style={{ position: 'relative' }}>
                {errors.desiredWeight && touched.desiredWeight && (
                  <svg
                    style={{
                      width: '16px',
                      height: '16px',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    <use
                      href={`${sprite}#checkbox-circle`}
                      style={{ fill: 'var(--error-color, #d80027)' }}
                    />
                  </svg>
                )}
                    <ErrorMessage
                    name="desiredWeight"
                    component={ErrorMessageStyled}
                  />
                  </div>
                  
                </DesiredWeight>

                <div>
      <Label>Date of birth </Label>
      <ProfileCalendarInput>
        <Field name="birthday">
          {({ field }) => (
            <div>
              <BirthdayPicker {...field} />
              {/* <ErrorMessage name="birthday" component={ErrorMessageStyled} /> */}
            </div>
          )}
        </Field>
      </ProfileCalendarInput>
    </div>
              </ProfileCalendarWrapper>
            </ProfileContainer>

            <div>
              <RadioInput
                dataBlood={values.blood}
                dataSex={values.sex}
                dataLevelActivity={values.levelActivity}
              />
            </div>

            <SaveButton type="submit">
              Save
            </SaveButton>
          </MainFormContainer>
        )}
      </Formik>
    </MainContainer>
  );
};
