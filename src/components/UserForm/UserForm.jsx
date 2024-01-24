import { Formik, ErrorMessage } from 'formik';

import { ProfileSchema } from './YupSchemas';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUserData,
  getUserProfile,
  // updateUserName,
} from '../../redux/profileSettings/operations';

import {
  selectProfileName,
  selectUserProfile,
} from '../../redux/profileSettings/selectors';
import { selectUser } from '../../redux/auth/auth-selectors';
import sprite from '../../assets/sprite.svg';
import BirthdayPicker from '../../helperComponents/DatePicker/DatePicker';
import {
  ErrorMessageStyled,
  MainContainer,
  UserContainer,
  Label,
  ProfileContainer,
  ProfileWrapper,
  RadioContainer,
  WrapperRadio,
  BloodWrapper,
  UserField,
  HeightField,
  CurrentWeightField,
  DesiredWeightField,
  SaveButton,
  BirthdayPickerField,
  RadioLabel,
  ActivField,
  LevelWrapper,
  FormContainer,
  NameEmailWrapper,
} from './UserForm.styled';
import { setIsParams } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

//================== Radio Button ==================

// ================ id - для ключа(можна використовувати індекс)
// ================ value - значення радіокнопки
// ================ label - назва кнопки

const bloodsValue = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
];

const sexValue = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

const levelActivityValue = [
  {
    id: 1,
    label: 'Sedentary lifestyle (little or no physical activity)',
    value: 1,
  },
  {
    id: 2,
    label: 'Light activity (light exercises/sports 1-3 days per week)',
    value: 2,
  },
  {
    id: 3,
    label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    value: 3,
  },
  {
    id: 4,
    label: 'Very active (intense exercises/sports 6-7 days per week)',
    value: 4,
  },
  {
    id: 5,
    label:
      'Extremely active (very strenuous exercises/sports and physical work)',
    value: 5,
  },
];

export const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = useSelector(selectUserProfile);
  const userName = useSelector(selectProfileName);
  const userCurrent = useSelector(selectUser);

  const currentName = userName || userCurrent.name;

  function formatDateString(DateStr) {
    const date = new Date(DateStr);
    const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
  }
  const currentDay = new Date();
  const formattedDateBirthday = formatDateString(
    birthday ? birthday : currentDay
  );
  console.log(formattedDateBirthday);

  const initialValues = {
    name: currentName || '',
    email: userCurrent.email,
    height: height || '',
    currentWeight: currentWeight || '',
    desiredWeight: desiredWeight || '',
    birthday: formattedDateBirthday,
    blood: blood || 0,
    sex: sex || '',
    levelActivity: levelActivity || 1,
  };

  const handleSubmit = async (data) => {
    try {
      const { email, birthday, ...profileData } = data;

      // console.log('DATA', data);

      // const updateNameResult = await dispatch(updateUserName({ name }));

      const updateProfileDataResult = await dispatch(
        addUserData({
          ...profileData,
          birthday: new Date(birthday).toISOString().split('T')[0],
        })
      );

      if (
        // updateNameResult.meta.requestStatus === 'fulfilled' &&
        updateProfileDataResult.meta.requestStatus === 'fulfilled'
      ) {
        dispatch(getUserProfile());
        dispatch(setIsParams());
        navigate('/diary');
      } else {
        console.log('Setting update error');
      }
    } catch (error) {
      toast.error('An error occurred while updating the profile');
      console.error('Error updating profile:', error);
    }
  };
  return (
    currentName && (
      <MainContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={ProfileSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, setFieldValue }) => (
            <FormContainer autoComplete="off">
              <UserContainer>
                <NameEmailWrapper
                  style={{
                    borderColor: touched.name
                      ? errors.name
                        ? 'var(--error-color, #d80027)'
                        : ''
                      : '',
                  }}
                >
                  <Label htmlFor="name">Name</Label>
                  <UserField
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    style={{
                      borderColor: touched.name
                        ? errors.name
                          ? 'var(--error-color, #d80027)'
                          : ''
                        : '',
                    }}
                  />
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
                </NameEmailWrapper>

                <NameEmailWrapper
                  style={{
                    borderColor: touched.email
                      ? errors.email
                        ? 'var(--error-color, #d80027)'
                        : ''
                      : '',
                  }}
                >
                  <Label htmlFor="email">Email</Label>

                  <UserField
                    required
                    type="text"
                    id="email"
                    name="email"
                    readOnly
                    placeholder={userCurrent.email}
                    style={{
                      borderColor: touched.email
                        ? errors.email
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
                </NameEmailWrapper>
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
                    <HeightField
                      required
                      type="number"
                      id="height"
                      name="height"
                      placeholder="0"
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
                    <CurrentWeightField
                      required
                      type="number"
                      id="currentWeight"
                      name="currentWeight"
                      placeholder="0"
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

                <ProfileWrapper>
                  <div
                    style={{
                      borderColor: touched.desiredWeight
                        ? errors.desiredWeight
                          ? 'var(--error-color, #d80027)'
                          : ''
                        : '',
                    }}
                  >
                    <Label htmlFor="desiredWeight">Desired Weight</Label>
                    <DesiredWeightField
                      required
                      type="number"
                      id="desiredWeight"
                      name="desiredWeight"
                      placeholder="0"
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
                  </div>

                  <div
                    style={{
                      borderColor: touched.birthday
                        ? errors.birthday
                          ? 'var(--error-color, #d80027)'
                          : ''
                        : '',
                    }}
                  >
                    <Label htmlFor="birthday">Date of birth</Label>
                    <BirthdayPickerField name="birthday">
                      {({ field }) => (
                       <BirthdayPicker
                       id="date"
                       currentDate={formattedDateBirthday}
                       handlerDate={(date) => {
                         console.log('Sending to handlerDate:', date);
                         setFieldValue('birthday', date);
                       }}
                     />
                      )}
                    </BirthdayPickerField>
                    <div style={{ position: 'relative' }}>
                      {errors.birthday && touched.birthday && (
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
                            // style={{ fill: 'var(--error-color, #d80027)' }}
                          />
                        </svg>
                      )}
                      <ErrorMessage
                        name="birthday"
                        component={ErrorMessageStyled}
                      />
                    </div>
                  </div>
                </ProfileWrapper>
              </ProfileContainer>

              <RadioContainer>
                <Label>Blood</Label>
                <WrapperRadio>
                  <BloodWrapper>
                    {bloodsValue.map((blood, index) => (
                      <RadioLabel key={index}>
                        <ActivField
                          required
                          type="radio"
                          name="blood"
                          value={blood.value}
                          checked={values.blood === blood.value}
                          onChange={() => setFieldValue('blood', blood.value)}
                        />
                        {blood.label}
                      </RadioLabel>
                    ))}
                  </BloodWrapper>

                  <BloodWrapper>
                    {sexValue.map((option, index) => (
                      <RadioLabel key={index}>
                        <ActivField
                          required
                          type="radio"
                          name="sex"
                          value={option.value}
                        />
                        {option.label}
                      </RadioLabel>
                    ))}
                  </BloodWrapper>
                </WrapperRadio>

                <LevelWrapper>
                  {levelActivityValue.map((option) => (
                    <RadioLabel key={option.id}>
                      <ActivField
                        required
                        type="radio"
                        name="levelActivity"
                        value={option.value}
                        checked={values.levelActivity === option.value}
                        onChange={() =>
                          setFieldValue('levelActivity', option.value)
                        }
                      />
                      {option.label}
                    </RadioLabel>
                  ))}
                </LevelWrapper>
              </RadioContainer>

              <SaveButton type="submit">Save</SaveButton>
            </FormContainer>
          )}
        </Formik>
      </MainContainer>
    )
  );
};