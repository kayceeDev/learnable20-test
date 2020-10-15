import React from 'react';
import SecondNavigation from './header-logo/SecondNavigation';
import NavigationMenu from './NavigationMenu'

// const style={
//   background:'red',
//   zIndex:1
// }

const Navigation = () => {
  return (
    <div>
      <NavigationMenu />
      <SecondNavigation />
    </div>
  );
};

export default Navigation;