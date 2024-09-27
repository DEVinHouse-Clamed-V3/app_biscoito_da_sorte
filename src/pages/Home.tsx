import { useEffect, useState } from "react"
import { Text, Alert, ScrollView, FlatList, SafeAreaView, View } from "react-native"
import axios from 'axios'

// GET -> lista informacoes
// POST -> cadastrar um novo informacao
// DELETE -> deletar um informacao
// PUT -> atualiza informacoes

/*
string
number
bool
object
array
*/

type Biscoito = {
    id: number
    premio: string
    marca: string
    especial: boolean
    mensagem: string
}

export default function Home() {

    const [biscoitos, setBiscoitos] = useState<Biscoito[]>([])

    /* 
    Forma com async await
    async function carregarDados() {
        try {
            const response = await axios.get('http://192.168.0.37:3000/biscoitos')
            setBiscoitos(response.data)
        } catch  {
            Alert.alert("Não foi possivel obter a lista de biscoitos")
        }
    }
    useEffect(() => {
        carregarDados()      
    }, []) // dispara uma única vez
    */

    useEffect(() => {
        axios
            .get('http://192.168.0.37:3000/biscoitos')
            .then((response) => {
                setBiscoitos(response.data)
            })
            .catch(() => {
                Alert.alert("Não foi possivel obter a lista de biscoitos")
            })
    }, [])

    return (
      <SafeAreaView>
        <Text>{biscoitos.length}</Text>
        <FlatList
            data={biscoitos} // array que deseja renderiza
            renderItem={({item}) => (
                <View style={{width: '80%', height: 50}} >
                <Text>{item.mensagem}</Text>
                </View>
            )}
           
        />

        {
            /*
             <ScrollView>
            {biscoitos.map((biscoito) => (
                <Text>{biscoito.message}</Text>
            ))}
        </ScrollView>
            */
        }
       

        </SafeAreaView>
     
    )
}