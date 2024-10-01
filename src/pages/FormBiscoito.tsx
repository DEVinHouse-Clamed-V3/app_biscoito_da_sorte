import { SafeAreaView, Text, StyleSheet, TextInput, Switch, View, Button, Alert } from "react-native";
import { globalStyles } from "../global/styles";
import { useState } from "react";

import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

export default function FormBiscoito() {

    const [message, setMessage] = useState('')
    const [isSpecial, setIsSpecial] = useState(false)
    const [brand, setBrand] = useState('')
    const [prize, setPrize] = useState('0')


    function handleSave(){

        if(message === '') {
            Alert.alert("Aviso","A mensagem é obrigatória")
        } else if(isSpecial === true && brand === '') {
            Alert.alert("Aviso", "A marca é obrigatória")
        } else if (isSpecial === true && (Number(prize) <= 0  || isNaN(Number(prize)))) {
            Alert.alert("Aviso", "Valor do prêmio deve ser maior que 0")
        } else {

            console.log("chegueiii")

            axios.post('http://192.168.0.37:3000/biscoitos', {
                mensagem: message,
                especial: isSpecial,
                premio: prize,
                marca: brand
            })
            .then(() => {
                Alert.alert("Aviso", 'Cadastrado com sucesso')
            })
            .catch((error) => {
                console.log(error)
                Alert.alert("Error", 'Não foi possível cadastrar o biscoito')
            })
            

            // POST
            // /biscoitos
            // {}

            // salvar 
        }
    }

    return (

        <SafeAreaView style={styles.container}>

            <Text>Mensagem do biscoito:</Text>
            <TextInput
                value={message}
                onChangeText={setMessage}
                style={globalStyles.input}
            />

            <View style={styles.switchContainer}>
                <Text>É um biscoito especial ?</Text>
                <Switch value={isSpecial} onValueChange={setIsSpecial} 
                /*trackColor={{
                    true: message === 'sorte' ? 'green' : 'false'
                }} 
                */
                />
            </View>

            {
                isSpecial === true &&
                <>
                    <Text >Marca do prêmio</Text>
                    <Picker
                        selectedValue={brand}
                        onValueChange={(option) => setBrand(option)}
                        style={{ backgroundColor: '#FFF', marginVertical: 10 }}
                    >
                        <Picker.Item value="" label="Selecione uma marca" />
                        <Picker.Item value="Doritos" label="Doritos" />
                        <Picker.Item value="Traquinas" label="Traquinas" />
                        <Picker.Item value="Milka" label="Milka" />
                    </Picker>

                    <Text>Valor do premio:</Text>
                    <TextInput
                        value={prize}
                        onChangeText={setPrize}
                        style={globalStyles.input}
                        keyboardType="number-pad"
                        contextMenuHidden
                    />
                </>
            }

            <Button title="cadastrar" onPress={handleSave} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})