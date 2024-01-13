import styled from '@emotion/styled';

export const ProductsFilters = styled.form`
  width: 100%;
  height: 108px;
`;

export const Form = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 335px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: #efede8;
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
  
`;

export const Btn = styled.button`
  position: absolute;
  top: 14px;
  right: ${(props) => props.right};

  width: 18px;
  height: 18px;
  border:none;
  background-color: rgba(0,0,0,0);
  coursor: pointer;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${props => props.color};
`;

