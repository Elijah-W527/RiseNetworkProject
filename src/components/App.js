import React from 'react';
import { AuthProvider } from "../contexts/AuthContext";
import Routing from './Routing'

function App() {

  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>             
  )
}

export default App;
