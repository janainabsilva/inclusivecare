import React from 'react';
import RotasApp from './Rotas';
import { AuthProvider } from './Contexts/auth';




const App = () =>{
    return (
        <AuthProvider>
        <RotasApp/>
        </AuthProvider>
        
    )
}

export default App