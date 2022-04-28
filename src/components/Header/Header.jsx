import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderInner,
  PageLink,
  PageTitle,
} from './styled';
import { activePage$ } from '../../services';
import { theme } from '../App/theme';

const LinesBlock = () => (
  <div
    style={{
      width: `2000px`,
      height: '60px',
      backgroundColor: theme.colors.black,
    }}>
    <div
      className="line"
      style={{
        width: `2000px`,
        height: '5px',
        backgroundColor: theme.colors.white,
        marginBottom: '10px',
      }}
    />
    <div
      style={{
        width: `2000px`,
        height: '5px',
        backgroundColor: theme.colors.white,
        marginBottom: '8px',
      }}
    />
    <div
      style={{
        width: `2000px`,
        height: '5px',
        backgroundColor: theme.colors.white,
        marginBottom: '6px',
      }}
    />
    <div
      style={{
        width: `2000px`,
        height: '5px',
        backgroundColor: theme.colors.white,
        marginBottom: '4px',
      }}
    />
    <div
      style={{
        width: `2000px`,
        height: '5px',
        backgroundColor: theme.colors.white,
        marginBottom: '2px',
      }}
    />
    <div
      style={{
        width: `2000px`,
        height: '5px',
        backgroundColor: theme.colors.white,
        marginBottom: '0',
      }}
    />
  </div>
);

export const Header = () => {
  const activePage = useStore(activePage$);

  const pageSelector = React.useMemo(
    () => (
      <HeaderInner>
        <LinesBlock />
        <Link className="header-link" to="/">
          <PageLink active={activePage[0]}>
            <PageTitle active={activePage[0]}>GREETING</PageTitle>
          </PageLink>
        </Link>
        <Link className="header-link" to="/setname">
          <PageLink active={activePage[1]}>
            <PageTitle active={activePage[1]}>SET NAME</PageTitle>
          </PageLink>
        </Link>
        <LinesBlock />
      </HeaderInner>
    ),
    [activePage]
  );


  return React.useMemo(
    () => (
      <HeaderContainer>
        {pageSelector}
      </HeaderContainer>
    ),
    [pageSelector]
  );
};
