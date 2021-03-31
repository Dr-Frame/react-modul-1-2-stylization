import React from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar linkOne="Main" linkTwo="Gallery" linkThree="Contacts" />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
