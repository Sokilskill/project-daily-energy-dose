import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormikForm = styled(Form)`
  width: 335px;
  height: fit-content;

  @media (min-width: 768px) {
    width: 364px;
  }
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const FormikInputField = styled(Field)`
  width: 100%;
  padding: 14px;
  margin-bottom: 4px;
  color: var(--secondary-text-color-1, #efede899);
  font-size: 14px;
  line-height: 1.28;
  background-color: transparent;
  border-radius: 12px;
  outline: none;
  border: ${(props) =>
    props.red
      ? '1px solid var(--error-color, #d80027);'
      : props.green
      ? '1px solid var(--success-color, #3cbf61);'
      : '1px solid var(--border, #efede84d);'};
  transition: border 250ms linear;
  &:hover,
  &:focus {
    border: 1px solid var(--orange, #e6533c);
  }

  @media (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const PassInputDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const IconEye = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: -34px;
`;

export const ErrorRowDiv = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--error-color, #d80027);
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`;

export const SuccessRowDiv = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--success-color, #3cbf61);
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`;

export const IconError = styled.svg`
  fill: var(--error-color, #d80027);
  width: 16px;
  height: 16px;
`;

export const IconSuccess = styled.svg`
  fill: var(--success-color, #3cbf61);
  width: 16px;
  height: 16px;
`;

export const FormSubmitButton = styled.button`
  display: flex;
  width: 136px;
  margin-top: 28px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white, #efede8);
  background-color: var(--orange, #e6533c);
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: var(--orange-1, #ef8964);
  }

  @media (min-width: 768px) {
    min-width: 190px;
    margin-top: 64px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
