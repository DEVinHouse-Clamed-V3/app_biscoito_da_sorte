import { SafeAreaView, Text, StyleSheet, TextInput, Switch, View, Button } from "react-native";
import { globalStyles } from "../global/styles";
import { useState } from "react";

import {Picker} from '@react-native-picker/picker'

export default function FormBiscoito() {

    const [message, setMessage] = useState('')
    const [isSpecial, setIsSpecial] = useState(false)

    const [brand, setBrand] = useState('')

    const [prize, setPrize] = useState('0')

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
                <Switch value={isSpecial} onValueChange={setIsSpecial} />
            </View>

            <Picker
              selectedValue={brand}
              onValueChange={(option) => setBrand(option)}
              style={{backgroundColor: '#FFF'}}  
            >
               <Picker.Item value="Doritos"  label="Doritos"/>
               <Picker.Item value="Traquinas" label="Traquinas"/>
               <Picker.Item value="Milka" label="Milka"/>  
            </Picker>

            <Text>Valor do premio:</Text>
            <TextInput
                value={prize}
                onChangeText={setPrize}
                style={globalStyles.input}
                keyboardType="number-pad"
            />

            <Button title="cadastrar" />


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