import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './MyContext';

export default function MyProvider({ children }) {
  const [user, setUser] = useState({});

  const context = useMemo(() => ({ user, setUser }), [user]);

  return (
    <myContext.Provider value={ context }>
      { children }
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
