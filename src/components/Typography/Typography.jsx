import styled from 'styled-components';
import { theme } from '../App/theme';

export const Heading1 = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.anton.h1};
  margin: 20px;
`;

export const Heading2 = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.anton.h2};
  margin: 20px;
`;

export const InLineHeading = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.anton.h2black};
`;

export const Heading3 = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.anton.h3};
`;

export const Heading4 = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.anton.h4};
`;

export const Article = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.montserrat.article};
  margin: 20px;
  margin-top: 25px;
`;

export const Body0 = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.montserrat.b0};
  margin: 20px;
`;

export const Body1 = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.montserrat.b1};
  margin: 20px;
`;

export const Body2 = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.montserrat.b2};
  margin: 20px;
`;

export const Typography = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  ${({ theme }) => theme.fonts.robotoMono.lg};
  max-width: 1024px;
`;

export const TypographyLg = styled(Typography)`
  ${({ theme }) => theme.fonts.loveYaLikeASister.md}
  ${({ theme }) => theme.effects.fontOutline}

  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
`;

export const TimeFrameText = styled(Typography)`
  ${({ theme }) => theme.fonts.loveYaLikeASister.md}
  ${({ theme }) => theme.effects.fontOutline}

  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  position: relative;
  top: 25px;
  @media (max-width: 1000px) {
    top: 17px;
  }
`;

export const Colored = styled.span`
  color: ${({ color }) =>
    theme.colors[color] ? theme.colors[color] : theme.colors['red']};
`;

export const TypographyMd = styled(Typography)`
  ${({ theme }) => theme.fonts.robotoMono.md}

  margin-bottom: 30px;

  color: ${({ theme }) => theme.colors.black};
`;

export const InlineLink = styled.a`
  ${({ theme }) => theme.fonts.montserrat.article}

  color: ${({ theme }) => theme.colors.cyan};
  text-decoration: unset;
`;

export const LinkLg = styled.a`
  ${({ theme }) => theme.fonts.loveYaLikeASister.md}
  ${({ theme }) => theme.effects.fontOutline}

  text-decoration: underline solid ${({ theme }) => theme.colors.lightBlue} 3px;

  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const LineSeparator = styled.div`
  height: 2px;
  width: 100%;
  max-width: 330px;
  margin: 8px 0 24px;

  opacity: 0.2;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.loveYaLikeASister.lg}
  ${({ theme }) => theme.effects.fontOutline}

  color: ${({ color = 'red', theme }) =>
    theme.colors[color] ? theme.colors[color] : theme.colors.red};

  text-align: center;

  max-width: 1024px;
  margin-bottom: 20px;
`;

export const TypographyArticleTitle = styled.div`
  ${({ theme }) => theme.fonts.robotoMono.md}

  text-align: center;
  font-weight: 700;
  line-height: 24px;
`;

export const TypographyArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TypographyArticle = ({ title, children }) => (
  <TypographyArticleContainer>
    <TypographyArticleTitle>{title}</TypographyArticleTitle>
    <TypographyArticleTitle>...</TypographyArticleTitle>
    <TypographyMd textAlign="center">{children}</TypographyMd>
  </TypographyArticleContainer>
);
