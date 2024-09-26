import { useEffect, useState } from "react"
import { Text, Alert, ScrollView } from "react-native"
import axios from 'axios'

// GET -> lista informacoes
// POST -> cadastrar um novo informacao
// DELETE -> deletar um informacao
// PUT -> atualiza informacoes

export default function Home(){

   const [biscoitos, setBiscoitos] = useState([])

    useEffect(() => {
        axios
        .get('http://192.168.0.37:3000/biscoitos')
        .then((response) => {
            setBiscoitos(response.data)
        })
        .catch(() => {
         Alert.alert("Não foi possivel obter a lista de biscoitos") 
        })

    }, []) // dispara uma única vez

    return (
        <ScrollView>
            {biscoitos.map((biscoito) => (
                <Text>{biscoito.message}</Text>
            ))}
        </ScrollView>
    )
}