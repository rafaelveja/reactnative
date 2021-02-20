import React from 'react';
import { View, Text, ImageBackground, Button, TouchableOpacity} from 'react-native';

// import Fundo from '../../../assets/opalavaverde.jpg';
// import Veiculos from '../Veiculos';

import styles from './styles';

function Home({navigation}) {
    function Veiculos() {
        navigation.navigate("Veiculos")
    }
    return(
    <View style={styles.caixa}>

        <ImageBackground source={require('../../../assets/opalaverde.jpg')} style={styles.fundo}>
           
            <View>

                 <Text style={styles.titulo}>Opaleiros Loja de Carros</Text>

                 <TouchableOpacity style={styles.btn}
                    onPress={Veiculos} >

                    <Text style={styles.texto}>Lista de Produtos</Text>
                </TouchableOpacity>
                    
            </View>

        </ImageBackground>

    </View>


    )
}

export default Home;