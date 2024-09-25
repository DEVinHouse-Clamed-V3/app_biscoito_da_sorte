import { SafeAreaView, StyleSheet,Text, TouchableOpacity } from "react-native";
import LottieView  from 'lottie-react-native'

export default function Apresentacao({navigation}) {

  function navigateToLogin(){
    navigation.navigate("Login")
  }

  function navigateToAbout() {
    navigation.navigate("Sobre")
  }

  function navigateToTest() {
    navigation.navigate("Test")
  }


  return (
    <SafeAreaView style={styles.safe}>
        <LottieView 
          autoPlay
          style={{width: 200, height: 200}}
          source={require('../../assets/animacao.json')}
        />

      <Text style={styles.title}>Biscoito da sorte</Text>
      <Text style={styles.subtitle}>Porque nada tão sábio como um biscoito te dando conselhos de vida</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={navigateToLogin} >
         <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={navigateToAbout} >
         <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={navigateToTest} >
         <Text style={styles.buttonText}>Teste sua sorte</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7e4b3',
  },
  title: {
    fontSize: 30,
    color: '#d2691e', // Marrom para o título (referência ao biscoito marrom)
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#d2691e', // Marrom claro para o subtítulo
    marginBottom: 40,
    textAlign: 'center'
  },
  button: {
    width: 200,
    height: 34,
    backgroundColor: '#8b4513',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16
  }
})

