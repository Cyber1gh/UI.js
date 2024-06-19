// HomeScreen.js

import React from 'react';

const HomeScreen = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      {/* Add other content as per the design */}
    </div>
  );
};

export default HomeScreen;
