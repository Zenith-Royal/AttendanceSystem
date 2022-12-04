import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';


export default function Login(props) {
  return (
    <View style={styles.container}>
    {/* Logo */}
    
      <View style={styles.image}>
       <Image
       source={require('../assets/book.jpg')}
       style={{
        width:300,
        height:300
       }}
       />
      </View>

      <Formik
        initialValues={{ email: '', password:'' }}
        onSubmit={values => console.log(values)}
      > 

      {({ handleChange, handleBlur, handleSubmit, values}) => ( 
      <>      
      <View style={styles.email}>
         <TextInput
          style={styles.input}
          placeholder="Your Institute Email ID"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
       </View>
    
      <View style={styles.password}>
       <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        />
      </View>

      <TouchableOpacity>
       <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={()=> props.navigation.navigate('Welcome')}
      >
      <Text>Sign In</Text>
      </TouchableOpacity>
      
      </>    

)}
    </Formik>
  
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    width:300,
    height:50,
    borderRadius:8,
    paddingLeft: 10,  
  },
  email:{
    marginBottom: 20,
  },
  image:{
    marginBottom:30
  },
  forgot:{
    color:'blue',
    paddingLeft:180,
    paddingTop:10
  },
  button:{
    backgroundColor:'#97BCE8',
    paddingVertical:10,
    paddingHorizontal:'33%',
    borderRadius:7,
    marginTop:10,
  }
});

