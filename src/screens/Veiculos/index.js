import React from 'react';
import{
     View, 
    Text, 
    StatusBar, 
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert,
   } from 'react-native';
import Fundo from '../../../assets/opalaverde.jpg';

import styles from './styles';

const veiculos = [
    {
        nome: "opala diplomata",
    },
    {
        nome: "caravam"
    },
    {
        nome: "opala 2.8"
    },
    {
        nome: "caravam diplomata"
    },
    {
        nome: "caravam farolzinho redondo"
    }
]

function Veiculos({navigation}) {
    function Login() {
        navigation.navigate("Login")
    }
    return(  
        <View style={styles.caixa}>

            <ImageBackground source={Fundo} style={styles.fundo}>

            <View style={styles.caixa}>

                <Text style={styles.titulo}>NOSSOS OPALAS</Text>

                {veiculos.map((veiculos) => <Text style={styles.veiculos}>{veiculos.nome}</Text>)}

                <TouchableOpacity style={styles.btn}
                    onPress={Login} >

                    <Text style={styles.texto}>desligar motor</Text>
                </TouchableOpacity>

            </View>

        

            </ImageBackground>

        </View>
            

    )
}


export default Veiculos;