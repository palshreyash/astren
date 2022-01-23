/*  Author: Swapnil and Shamik
Last edited: 10/1/22

*/

import React, { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Dimensions 
} from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Input from "../components/Input";


import axios from "../utils/axios.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('screen');

function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const[usernameFocus, setUsernameFocus ] = useState(false);


  //Validating Email
  const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!re.test(email)) {

      return false;
    }
    return true;
    

  };

  const validateUserName  = (username) => {
    var re = /^[a-zA-Z0-9._]+$/; // or /^\w+$/ as mentioned
    if (!re.test(username)) {

      return false;
    }
    return true;
    

  }

  //Function to register user to DB using axios for API calls
  const registerUser = async (e) => {
    e.preventDefault();

    console.log(validateUserName("Username: "+name));
    console.log(validateEmail("Email: "+email));
    setLoading(true);
    if(name.length===0 || name.length > 30) {

      setError(true);
      setErrorText("Invalid username");
      console.log("Invalid usernamae");

      return;

    }

    if(email.length===0) {

      setError(true);
      setErrorText("Invalid email");
      console.log("Invalid email");

      return;

    }

    if(!validateUserName(name)) {


      setError(true);
      setErrorText("Invalid username");
      console.log("Invalid usernamae");

      return;

    }

    if (!validateEmail(email)) {
      setError(true);
      setErrorText("Invalid email");
      console.log("Invalid email");

      return;
    }

    /*Validating if the password length is less then 6,
    if so then return error */

    if(password.length <6 || password.length===0 ) {
      setError(true);
      setErrorText("Password must be 6 characters min");
      console.log("Password must be 6 characters min");
      return;

    }

    await axios
      .post("/api/auth/register ", {
        username: name,
        email: email,
        password: password,
      })
      .then(async(msg) => {
        if (msg.data.success) {
          await AsyncStorage.setItem('username',name);
          setLoading(false);
          navigation.navigate("Home Screen");
        } else {

          setError(true);
          setErrorText(msg.data.error);
          setLoading(false);
          
        }
      })
      .catch((err) => {
        setError(true);
        setErrorText(err);
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/LogoSignup.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>COMING SOON</Text>
            <Text style={styles.subTitle1}>
              Be <Text style={styles.boldText}>the first one</Text> to know when
              we drop our first release{" "}
              <Text style={styles.boldText}>in the world !</Text>
            </Text>
            <Text style={styles.subTitle2}>
              Join us creating an Empowered world of beings & history !
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input1}
              placeholder="Enter Username"
              placeholderTextColor={colors.inputText}
              textContentType="name"
              autoComplete="off"
              autoCorrect
              autoCorrect={false}
              onFocus={(e) => setUsernameFocus(true)}
              
            />
            {!usernameFocus ?  null : <Text style={styles.subInputUserNameText}>
              *should only contain letters, numbers, period, dashes and underscores
            </Text> }
            <Input
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input2}
              placeholder="Email Address"
              placeholderTextColor={colors.inputText}
              textContentType="emailAddress"
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input3}
              placeholder="Enter Password"
              placeholderTextColor={colors.inputText}
              textContentType="password"
              secureTextEntry={true}
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Text style={styles.subInputText}>
              *Must be 6 characters min
            </Text>

          </View>
          <View style={styles.buttonContainer}>
            <AppButton text={loading ? "Signing Up" : "Sign Up"} onPress={(e) => registerUser(e)} />
          </View>
          {errorText===undefined ? null : <Text style={styles.error}>
              {errorText}
          </Text>}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    flex: 1,
    height: height,
    width: width
  },
  logoContainer: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  input1: {
    padding: 10,
    marginVertical: 5,
  },
  input2: {
    padding: 10,
    marginVertical: 5,
  },
  input3: {
    padding: 10,
    marginVertical: 5,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 275,
    height: 275,
    borderRadius: 20,
  },
  textContainer: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 38,
    color: colors.text,
    textAlign: "center",
  },
  subTitle1: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
  },
  subTitle2: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
  },
  error: {
    marginTop: 5,
    fontSize: 14,
    color: colors.errorText,
    textAlign: "center",
    textShadowColor: "#FF3B43",
    textShadowRadius: 20,
    display: "flex",
    flexWrap: "wrap"

  },
  subInputText: {
    fontSize: 12,
    margin: 2,
    color: colors.subInputText,
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: -160


  },
  subInputUserNameText: {
    fontSize: 12,
    margin: 2,
    color: colors.subInputText,
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width : width-100,
    marginLeft: -20

  }
});

export default SignUpScreen;
