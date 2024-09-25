import {useState, useEffect} from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Button, Alert, } from 'react-native';
import LottieView  from 'lottie-react-native'

const mensagems = [
  'mensagem 1',
  'mensagem 2',
  'mensagem 3',
  'mensagem 4',
  'mensagem 5',
]

export default function Biscoito() {
  
  const [mensagemSelecionada, setMensagemSelecionada] =  useState('')
  const [quantidadeCliqueBotao, setQuantidadeCliqueBotao ] = useState(0)

  function exibirMensagem(){
      const numeroAleatorio = Math.floor(Math.random() * 5)

      setMensagemSelecionada(mensagems[numeroAleatorio])

      setQuantidadeCliqueBotao(quantidadeCliqueBotao + 1)
  }

  useEffect(() => {
    Alert.alert("Bem vindo")
  }, []) // executa única vez

  useEffect(() => {
    if(quantidadeCliqueBotao === 5) {
        Alert.alert("Acabaram os biscoitos")
    }
  }, [quantidadeCliqueBotao])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Text>{mensagemSelecionada}</Text>

      <Text>Numero de cliques: {quantidadeCliqueBotao}</Text>

      <LottieView 
        autoPlay
        source={require('../../assets/animacao.json')}
        style={{width: 200, height: 200}}
      />

        {
          quantidadeCliqueBotao < 5 
            ? 
              <Button onPress={exibirMensagem} title='Quebrar biscoito' /> 
            : 
              <Text>Acabou !!!</Text>
        }
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
