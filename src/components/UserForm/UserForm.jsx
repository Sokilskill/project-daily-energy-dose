import { Formik, ErrorMessage } from 'formik';
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
import { useState } from 'react';

export const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userProfile = useSelector(selectUserProfile);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values) => {
   
      setIsSubmitting(true);
      console.log('Form values:', values);
    try {   
      const res = dispatch(addUserData(values));
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('An error occurred while updating the profile');
    } finally {
      setIsSubmitting(false);
      console.log('Form submission completed.');
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
                <div style={{ position: 'relative' }}>
                  <Label htmlFor="name">Name</Label>
                  <UserInput
                    type="text"
                    name="name"
                    id="name"
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
                <Label htmlFor="name">Email</Label>
                <UserInput
                  type="email"
                  name="email"
                  id="email"
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
                  <Label htmlFor="height">Height</Label>
                  <HeightInput
                    type="number"
                    name="height"
                    id="height"
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
                    <ErrorMessage
                      name="height"
                      component={ErrorMessageStyled}
                    />
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
                  <Label htmlFor="currentWeight">Current Weight</Label>
                  <CurrentWeightInput
                    type="number"
                    name="currentWeight"
                    id="currentWeight"
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
                <DesiredWeight
                  style={{
                    borderColor: touched.desiredWeight
                      ? errors.desiredWeight
                        ? 'var(--error-color, #d80027)'
                        : ''
                      : '',
                  }}
                >
                  <Label htmlFor="desiredWeight">Desired Weight</Label>
                  <DesiredWeightInput
                    type="number"
                    name="desiredWeight"
                    id="desiredWeight"
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

                  <BirthdayPicker />
                  {/* <ErrorMessage name="birthday" component={ErrorMessageStyled} /> */}
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

            <SaveButton type="submit" disabled={isSubmitting}>
              Save
            </SaveButton>
          </MainFormContainer>
        )}
      </Formik>
    </MainContainer>
  );
};
