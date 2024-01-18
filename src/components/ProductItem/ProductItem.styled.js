import styled from "styled-components";



export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  margin-bottom: 20px;
`;

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Chip = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7.5px 5px 7.5px;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(239, 237, 232, 0.05);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const WrapBtn = styled.div`
  display: flex;
  align-items: center;
`;





export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: rgba(239, 237, 232, 0);
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  cursor: pointer;
`;

export const IconAdd = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #e6533c;
`;

export const LowerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 8px;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #e6533c;
`;

export const ProductName = styled.h2`
  width: 258px;
  color: #efede8;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
`;

export const InfoText = styled.p`
  color: rgba(239, 237, 232, 0.4);

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const Accent = styled.span`
  color: #efede8;
  color: #efede8;
`;