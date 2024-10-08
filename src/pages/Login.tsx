import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView , Alert } from 'react-native';
import {useState} from 'react'
import { globalStyles } from '../global/styles';

export default function Login({navigation}) {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  function handleLogin() {
      if(email === "biscoito@gmail.com" && password === "123456") {
         navigation.navigate("Home")
      } else {
        Alert.alert("Usuário não encontrado")
      }
  }


  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Será que hoje é o seu dia de sorte? Vamos descobrir!</Text>
      </View>

      <View style={styles.bottomSection}>
      
        <TextInput
          placeholder="Email"
          placeholderTextColor="#8b4513" // Marrom claro para o placeholder
          style={globalStyles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#8b4513" // Marrom claro para o placeholder
          style={globalStyles.input}
          secureTextEntry={showPassword}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}><Text>Exibir senha</Text></TouchableOpacity>

        <View style={styles.passwordRow}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9933', // Fundo laranja
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,

  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#f7e4b3', // Fundo creme
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#d2691e', // Texto marrom claro
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#d2691e', // Botão marrom claro
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff', // Texto branco no botão
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d2691e', // Borda marrom claro
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#d2691e', // Texto marrom claro
    fontWeight: 'bold',
    fontSize: 16,
  },
});


