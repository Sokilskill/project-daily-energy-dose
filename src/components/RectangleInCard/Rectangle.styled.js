import styled from "styled-components";

export const RecText = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 16px;
`;

export const Rectangle = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

