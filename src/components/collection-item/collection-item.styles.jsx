import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemStyled = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const ImageStyled = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const CustomButtonStyled = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  &:hover {
    display: flex;
    opacity: 0.85;
  }
`;

export const CollectionFooterStyled = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameStyled = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceStyled = styled.span`
  width: 10%;
`;
