import styled from 'styled-components';

export const ButtonBody = styled.button`
  border-radius: 3.5px;
  border: none;
  margin: 3px;

  width: 320px;
  height: 70px;

  background-color: ${({ theme }) => theme.colors.red};
  opacity: 0.5;

  text-align: center;
  ${({ theme }) => theme.fonts.montserrat.b0}

  // remove blue highlight on mobiles
  -webkit-tap-highlight-color: transparent;

  &:not(&:disabled) {
    cursor: pointer;
    opacity: 1;
    &:hover {
      background-color: ${({ theme }) => theme.colors.redHover};
    }
  }
  @media (max-width: 1000px) {
    width: 280px;
    height: 60px;
  }
`;
