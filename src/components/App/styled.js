import styled from 'styled-components';

export const AppBody = styled.div`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;

  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  // box-sizing: border-box;

  width: 100%;

  background: ${({ theme }) => theme.colors.black};

  @media (max-width: 1000px) {
  }
`;

export const BrownBlock = styled(Block)`
  background: ${({ theme }) => theme.colors.brown};
`;

export const FirstBlock = styled(Block)`
  padding-top: 60px;
  padding-bottom: 227px;
  min-height: var(--vh, calc(100vh - 60px));

  @media (max-width: 1000px) {
    padding-bottom: 150px;
  }
`;

export const BlackBlock = styled(Block)`
  background: ${({ theme }) => theme.colors.black};
  min-height: calc(80vh - 60px);
  padding-bottom: 80px;
`;

export const GradientLine = styled(Block)`
  height: 20vh;
  justify-content: end;
  -webkit-justify-content: flex-end;
  background: ${({ theme, color }) =>
    color ? color : theme.gradientColors.red};
`;

export const FirstGradientLine = styled(Block)`
  background: ${({ theme, color }) =>
    color ? color : theme.gradientColors.red};
  height: 60vh;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: row;

  @media (max-width: 1000px) {
    min-height: 400px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  @media (max-width: 1000px) {
    margin-top: 40px;
  }
`;
