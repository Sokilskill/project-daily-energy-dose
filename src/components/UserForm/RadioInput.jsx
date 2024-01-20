import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { ProfileSchema } from './YupSchemas';
import {
  RadioContainer,
  BloodWrapper,
  Wrapper,
  Label,
  ActivField,
  Text,
  LevelWrapper,
} from './RadioInput.styled';

export const RadioInput = ({ dataBlood, dataSex, dataLevelActivity }) => {
  useEffect(() => {
    const bloodRadio = document.querySelector(
      `input[name="blood"][value="${dataBlood}"]`
    );
    const sexRadio = document.querySelector(
      `input[name="sex"][value="${dataSex}"]`
    );
    const levelActivityRadio = document.querySelector(
      `input[name="levelActivity"][value="${dataLevelActivity}"]`
    );

    if (bloodRadio) bloodRadio.checked = true;
    if (sexRadio) sexRadio.checked = true;
    if (levelActivityRadio) levelActivityRadio.checked = true;
  }, [dataBlood, dataSex, dataLevelActivity]);

  return (
    <Formik
      initialValues={{
        blood: dataBlood,
        sex: dataSex,
        levelActivity: dataLevelActivity,
      }}
      validationSchema={ProfileSchema}
  
  >
      {({ values, handleChange }) => (
        <RadioContainer>
          <Text>Blood</Text>{' '}
          <BloodWrapper>
            <Wrapper>
              <Label>
                <ActivField
                  type="radio"
                  name="blood"
                  value="1"
                  checked={values.blood === '1'}
                  onChange={handleChange}
                  required
                />
                1
              </Label>
              <Label>
                <ActivField
                  type="radio"
                  id="blood-2"
                  name="blood"
                  value="2"
                  checked={values.blood === '2'}
                  onChange={handleChange}
                  required
                />
                2
              </Label>
              <Label>
                <ActivField
                  type="radio"
                  name="blood"
                  value="3"
                  checked={values.blood === '3'}
                  onChange={handleChange}
                  required
                />
                3
              </Label>
              <Label>
                <ActivField
                  type="radio"
                  name="blood"
                  value="4"
                  checked={values.blood === '4'}
                  onChange={handleChange}
                  required
                />
                4
              </Label>
            </Wrapper>
            <Wrapper>
              <Label>
                <ActivField
                  type="radio"
                  name="sex"
                  value="male"
                  checked={values.sex === 'male'}
                  onChange={handleChange}
                  required
                />
                Male
              </Label>
              <Label>
                <ActivField
                  type="radio"
                  name="sex"
                  value="female"
                  checked={values.sex === 'female'}
                  onChange={handleChange}
                  required
                />
                Female
              </Label>
            </Wrapper>
          </BloodWrapper>
          <LevelWrapper>
            <Label>
              <ActivField
                type="radio"
                name="levelActivity"
                value="1"
                checked={values.levelActivity === '1'}
                onChange={handleChange}
                required
              />
              Sedentary lifestyle (little or no physical activity)
            </Label>
            <Label>
              <ActivField
                type="radio"
                name="levelActivity"
                value="2"
                checked={values.levelActivity === '2'}
                onChange={handleChange}
                required
              />
              Light activity (light exercises/sports 1-3 days per week)
            </Label>
            <Label> 
              <ActivField
                type="radio"
                name="levelActivity"
                value="3"
                checked={values.levelActivity === '3'}
                onChange={handleChange}
                required
              />
              Moderately active (moderate exercises/sports 3-5 days per week)
            </Label>
            <Label>
              <ActivField
                type="radio"
                id="levelActivity-4"
                name="levelActivity"
                value="4"
                checked={values.levelActivity === '4'}
                onChange={handleChange}
                required
              />
              Very active (intense exercises/sports 6-7 days per week)
            </Label>
            <Label>
              <ActivField
                type="radio"
                name="levelActivity"
                value="5"
                checked={values.levelActivity === '5'}
                onChange={handleChange}
                required
              />
              Extremely active (very strenuous exercises/sports and physical
              work)
            </Label>
          </LevelWrapper>
        </RadioContainer>
      )}
    </Formik>
  );
};
