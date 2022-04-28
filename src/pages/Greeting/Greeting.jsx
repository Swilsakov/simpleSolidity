import React from 'react';
import { useStore } from 'effector-react';

import { greeting$, setActivePage } from '../../services';
import { BlackBlock, FormContainer, GradientLine } from '../../components/App';
import { Heading3, InLineHeading } from '../../components/Typography';
import { theme } from '../../components/App/theme';
import { TotalContainer } from './styled';

export const Greeting = () => {

  React.useEffect(() => {
    setActivePage([true, false]);
  }, []);

  const greeting = useStore(greeting$);

  const renderGreeting = React.useMemo(
    () => (
      <>
        <TotalContainer>
          <Heading3>
            {greeting}
          </Heading3>
        </TotalContainer>
      </>
    ),
    [greeting]
  );

  return (
    <>
      <GradientLine color={theme.gradientColors.green}>
        <InLineHeading>GREETING</InLineHeading>
      </GradientLine>
      <BlackBlock>
        <FormContainer>
          {renderGreeting}
        </FormContainer>
      </BlackBlock>
    </>
  );
};
