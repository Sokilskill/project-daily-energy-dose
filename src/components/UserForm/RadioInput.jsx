import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { ProfileSchema } from './YupSchemas';
import { RadioContainer, BloodWrapper, Wrapper } from './RadioInput.styled';

export const RadioInput = ({ dataBlood, dataSex, dataLevelActivity }) => {
  useEffect(() => {
    const bloodRadio = document.querySelector(`input[name="blood"][value="${dataBlood}"]`);
    const sexRadio = document.querySelector(`input[name="sex"][value="${dataSex}"]`);
    const levelActivityRadio = document.querySelector(`input[name="levelActivity"][value="${dataLevelActivity}"]`);
  
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
      onSubmit={(values) => {
        // Handle form submission if needed
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <RadioContainer>
          <Wrapper>
            <div>
              <label>Blood</label>
              <BloodWrapper>
              <input
                type="radio"
                name="blood"
                value="1"
                checked={values.blood === '1'}
                onChange={handleChange}
              /> 
              1
            
              </BloodWrapper>
            
<div>
 
              <input
                type="radio"
                name="blood"
                value="2"
                checked={values.blood === '2'}
                onChange={handleChange}
              />
              2
           
</div>
            
            <label>
              <input
                type="radio"
                name="blood"
                value="3"
                checked={values.blood === '3'}
                onChange={handleChange}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                name="blood"
                value="4"
                checked={values.blood === '4'}
                onChange={handleChange}
              />
              4
            </label>
            </div>
           
          </Wrapper>

          <div>
            <label>Sex:</label>
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={values.sex === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
                checked={values.sex === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <div>
            <label>Level of Activity:</label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="1"
                checked={values.levelActivity === '1'}
                onChange={handleChange}
              />
              Sedentary lifestyle (little or no physical activity)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="2"
                checked={values.levelActivity === '2'}
                onChange={handleChange}
              />
              Light activity (light exercises/sports 1-3 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="3"
                checked={values.levelActivity === '3'}
                onChange={handleChange}
              />
              Moderately active (moderate exercises/sports 3-5 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="4"
                checked={values.levelActivity === '4'}
                onChange={handleChange}
              />
              Very active (intense exercises/sports 6-7 days per week)
            </label>
            <label>
              <input
                type="radio"
                name="levelActivity"
                value="5"
                checked={values.levelActivity === '5'}
                onChange={handleChange}
              />
              Extremely active (very strenuous exercises/sports and physical work)
            </label>
          </div>

          <ErrorMessage name="blood" component="div" />
          <ErrorMessage name="sex" component="div" />
          <ErrorMessage name="levelActivity" component="div" />

</RadioContainer>
      )}
    </Formik>
  );
};
