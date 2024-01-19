import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { ProfileSchema } from './YupSchemas';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  addUserData,
  // getCurrentUser,
} from '../../redux/profileSettings/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectUserProfile,
} from '../../redux/profileSettings/selectors';

import {
  CalendarField,
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
} from './UserForm.styled';

// import { useEffect } from 'react';
import { RadioInput } from './RadioInput';
// import { DaySwitch } from '../DaySwitch/DaySwitch';
import BirthdayPicker from '../../helperComponents/DatePicker/DatePicker';
// import { refreshThunk } from '../../redux/auth/auth-operations';


export const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userProfile = useSelector(selectUserProfile);


  // useEffect(() => {
  //   dispatch(refreshThunk(user));
  // }, [dispatch, user]);


  const handleSubmit = async (values) => {
    try {
      setIsSubmitted(true);
      await dispatch(addUserData(values)).then(() => {
        console.log('Profile updated successfully');
      });
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('An error occurred while updating the profile');
      console.error('Error updating profile:', error);
    } finally {
      setIsSubmitted(false);
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
        {({ values, handleChange, handleBlur }) => (
          <MainFormContainer autoComplete="off" onSubmit={handleSubmit}>
            <UserContainer>
              <div>
                <Label>Name </Label>
                <UserInput
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  placeholder="Name"
                  aria-label="Name Input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="name" component={ErrorMessageStyled} />
              </div>

              <div>
                <Label>Email</Label>
                <UserInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name="email" component={ErrorMessageStyled} />
              </div>
            </UserContainer>
            <ProfileContainer>
              <ProfileWrapper>
                <div>
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
                  />
                  <ErrorMessage name="height" component={ErrorMessageStyled} />
                </div>
                <div>
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
                  />
                  <ErrorMessage
                    name="currentWeigh"
                    component={ErrorMessageStyled}
                  />
                </div>
              </ProfileWrapper>
              <ProfileCalendarWrapper>
                <div>
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
                  />
                  <ErrorMessage
                    name="desiredWeight"
                    component={ErrorMessageStyled}
                  />
                </div>

                <div>
                  <Label>Date of birth </Label>

                  <CalendarField name="birthday">
                    {({ field }) => (
                      <div>
                        <BirthdayPicker {...field} />
                        <ErrorMessage
                          name="birthday"
                          component={ErrorMessageStyled}
                        />
                      </div>
                    )}
                  </CalendarField>
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

            <SaveButton type="submit" onSubmit={handleSubmit}>
              Save
            </SaveButton>

          </MainFormContainer>
        )}
      </Formik>
    </MainContainer>
  );
};
