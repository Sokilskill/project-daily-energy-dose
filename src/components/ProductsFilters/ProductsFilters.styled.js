import styled from '@emotion/styled';

export const Form = styled.form`
  
`;

export const WrapInput = styled.div`
  position: relative;
`;

export const ProductsFilters = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px){
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  width: 335px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: var(--white, #efede8);
  background-color: rgba(239, 237, 232, 0);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  outline: none;

  :focus,
  :valid {
    border-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Btn = styled.button`
  position: absolute;
  top: 14px;
  right: ${(props) => props.right};
  padding: 0;
  width: 18px;
  height: 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 17px;
  }
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${props => props.color};
`;

