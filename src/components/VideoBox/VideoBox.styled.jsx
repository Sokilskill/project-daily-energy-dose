import styled from '@emotion/styled';

export const VideoBoxDiv = styled.div`
  display: flex;
  gap: 8px;
  padding: 14px 18px;
  align-items: center;
  width: 146px;
  height: 66px;
  margin-bottom: 70px;
  border-radius: 12px;
  background-color: var(--grey, #303030);

  @media (min-width: 768px) {
    width: 206px;
    height: 96px;
    gap: 12px;
    padding: 20px 36px 20px 23px;
    margin-bottom: 56px;
    align-items: end;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Ellips = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--orange-1, #ef8964);

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconPlay = styled.svg`
  width: 12px;
  height: 12px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ViewsSum = styled.p`
  color: var(--white, #efede8);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 8px;
  }
`;

export const ViewsText = styled.p`
  color: var(--vievs-text, #efede8a6);
  font-size: 12px;
  line-height: 1.33;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
