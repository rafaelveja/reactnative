import React from 'react';
import  { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Veiculos from '../screens/Veiculos';

const Rotas = {

    Login: {
        name: "Login",
        screen: Login
    },
    
    Home: {
        name: "Home",
        screen: Home
    },
    
    Veiculos: {
        name: "Veiculos",
        screen: Veiculos
    },

}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);