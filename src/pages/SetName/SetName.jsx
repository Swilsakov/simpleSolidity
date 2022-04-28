import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { setActivePage, useFetchWeb3Data, useSubscribeToProvider, setName } from '../../services';
import { BlackBlock, FormContainer, GradientLine } from '../../components/App';
import { InLineHeading } from '../../components/Typography';
import { theme } from '../../components/App/theme';
import { Input } from '../../components/Input';
import { ConnectorButton } from '../../components/Button/ConnectorButton';

export const SetName = () => {
  useFetchWeb3Data();
  useSubscribeToProvider();

  React.useEffect(() => {
    setActivePage([false, true]);
  }, []);

  const [newName, setNewName] = useState('');

  const handleSetNameClick = React.useCallback(() => {
    setName(newName);
  }, [newName]);

  const setNameButton = React.useMemo(() => {
    return (
      <Button onClick={handleSetNameClick}>
        SET NAME
      </Button>
    );
  }, [handleSetNameClick]);

  const renderSetName = React.useMemo(() => {
    return (
      <>
          <Input
            type='string'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            label={'New name'}
          />
        {setNameButton}
      </>
    );
  }, [setNameButton, newName]);

  return (
    <>
      <GradientLine color={theme.gradientColors.red}>
        <InLineHeading>SET NAME</InLineHeading>
      </GradientLine>
      <BlackBlock>
        <FormContainer>
          <ConnectorButton>{renderSetName}</ConnectorButton>
        </FormContainer>
      </BlackBlock>
    </>
  );
};
