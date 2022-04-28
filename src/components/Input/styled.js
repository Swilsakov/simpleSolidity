import styled from 'styled-components';

export const InputContainer = styled.label`
  display: grid;
  grid-template-areas: 'label label helper helper' 'input input input input' 'error error error error';
  grid-template-rows: 24px 70px 50px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  width: 324px;

  @media (max-width: 1000px) {
    width: 284px;
  }
`;

export const Label = styled.span`
  grid-area: label;
  margin-bottom: -5px;

  ${({ theme }) => theme.fonts.montserrat.b0};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Helper = styled.span`
  grid-area: helper;
  margin-bottom: -5px;
  text-align: right;

  ${({ theme }) => theme.fonts.montserrat.b0}
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Error = styled.span`
  grid-area: error;

  margin-top: 5px;

  text-align: center;

  ${({ theme }) => theme.fonts.robotoMono.md}
  color: ${({ theme }) => theme.colors.red};
`;

export const InputWrapper = styled.div`
  grid-area: input;
  position: relative;
  z-index: 1;

  width: 324px;

  transition: all 0.1s;

  @media (max-width: 1000px) {
    width: 284px;
  }
`;

export const InputBody = styled.input`
  border-radius: 3.5px;
  border-style: solid;
  border-width: 5px;
  border-color: ${({ theme, border }) => {
    switch (border) {
      case null:
        return theme.colors.white;
      case true:
        return theme.colors.green;
      case false:
        return theme.colors.red;
    }
  }};
  margin: 3px;
  width: 306px; // 320 -14
  height: 58px; // 70 -12

  background: ${({ theme }) => theme.colors.white};
  outline: none;
  text-align: center;

  ${(props) => props.theme.fonts.montserrat.logo};
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 1000px) {
    width: 266px;
    height: 48px;
  }
`;
