import React, { Component, } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

class Icone extends Component {
  constructor(props){
    super(props);  
  }
  
  render () {
    if(this.props.escolha =='pedra') {
      return (
     <View style={styles.palco} >
          <Text>Escolha do {this.props.jogador}: {this.props.escolha}</Text>
          <Image source={require('./img/pedra.png')}></Image>
        </View>
    ) 
    } else if(this.props.escolha == 'papel') {
      return (
     <View style={styles.palco} >
          <Text>Escolha do {this.props.jogador}: {this.props.escolha}</Text>
          <Image source={require('./img/papel.png')}></Image>
        </View>
    ) 
    } else if(this.props.escolha == 'tesoura') {
     return (
     <View style={styles.palco} >
          <Text>Escolha do {this.props.jogador}: {this.props.escolha}</Text>
          <Image source={require('./img/tesoura.png')}></Image>
        </View>
    ) 
    } else{
      return false
    }
    
  }
}

const styles = StyleSheet.create({
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
})

export default Icone