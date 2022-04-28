import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  height: auto;
  min-height: 60px;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const Address = styled.a`
  ${({ theme }) => theme.fonts.robotoMono.md}

  color: ${({ theme }) => theme.colors.yellow};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  max-width: 1000px;
  width: 100%;
`;

export const LinksContainer = styled.nav`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  margin-right: 40px;

  &:last-of-type {
    margin-right: 0;
  }

  ${({ theme }) => theme.fonts.loveYaLikeASister.sm}
  ${({ theme }) => theme.effects.fontOutline}
`;

export const PageLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.cyan : theme.colors.black};
  color: ${({ theme, active }) =>
    active ? theme.colors.black : theme.colors.white};
  width: ${({ logo }) => (logo ? '230px' : '190px')};
  height: 60px;
  &:hover {
    color: ${({ theme, active }) =>
      active ? theme.colors.black : theme.colors.cyan};
  }
`;

export const LogoTitle = styled.span`
  ${({ theme }) => theme.fonts.montserrat.logoBlack}
`;

export const PageTitle = styled.span`
  ${({ theme }) => theme.fonts.montserrat.headerBlack};
`;

export const AddressTitle = styled.span`
  ${({ theme }) => theme.fonts.montserrat.captionBlack};

  @media (max-width: 1000px) {
    ${({ theme }) => theme.fonts.montserrat.b1Black};
  }
`;

export const BurgerContainer = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AnimatedLink = styled.div`
  width: 100%;

  // enter from
  &.fade-enter {
    height: 0;
  }

  // enter to
  &.fade-enter-active {
    height: 500px;
    transition: height 0.5s ease-in;
  }

  // exit from
  &.fade-exit {
    height: 400px;
  }

  // exit to
  &.fade-exit-active {
    height: 0;
    transition: height 0.5s ease-in;
  }
`;
