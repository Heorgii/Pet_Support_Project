import React from 'react';
import { useState } from 'react';
import { Container } from 'components/Header/MobileMenu/MobileMenu.styled';
import { Burger, CloseButton } from './menu.styled';
import { MobileMenu } from 'components/Header/MobileMenu/MobileMenu';

export const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{}}>
      {!isExpanded ? (
        <Burger onClick={handleToggle}></Burger>
      ) : (
        <CloseButton onClick={e => handleToggle(e)}></CloseButton>
      )}

      <Container className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
        <MobileMenu onClick={handleToggle} />
      </Container>
    </div>
  );
};
