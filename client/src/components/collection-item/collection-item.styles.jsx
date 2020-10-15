import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemStyled = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding: 5px;

  @media screen and (max-width: 1000px) {
    width: 25vw;
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
  }
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

  @media screen and (max-width: 800px) {
    &:hover {
      opacity: unset;
    }
  }
`;

export const CustomButtonStyled = styled(CustomButton)`
  display: none;
  position: absolute;
  width: 80%;
  opacity: 0.7;
  top: 255px;

  ${CollectionItemStyled}:hover & {
    display: flex;
    opacity: 0.85;
  }

  @media screen and (max-width: 800px) {
    opacity: 0.9;
    display: block;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionFooterStyled = styled.div`
  width: 97%;
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
