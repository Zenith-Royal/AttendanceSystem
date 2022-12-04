import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';


let customFonts = {
  'Rubik-Regular': require('../assets/Fonts/Rubik-Regular.ttf'),
  'RopaSans-Regular': require('../assets/Fonts/RopaSans-Regular.ttf')
};

export default class Welcome extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>

      <View style={styles.image}>
         <Image
           source={require('../assets/attendit.jpg')}
           style={{
           width:200,
           height:260,
           
       }}
       />

      </View>
        <Text style={{ fontFamily: 'RopaSans-Regular', fontSize: 48 }}>Loading.</Text>
        <Text style={{ fontFamily: 'RopaSans-Regular', fontSize: 36 }}>Mark your attendance at</Text>
        
        <View style={styles.white}>
        <Text style={styles.present}>There is no time like the</Text>
        <Text style={styles.present}>PRESENT</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#97BCE8',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:-60
    },
    white:{
      marginTop:70,
      alignItems:'center'
    },
    present:{
      fontFamily: 'Rubik-Regular', 
      fontSize: 36,
      color: 'white',
      fontSize: 22
    }
  });
