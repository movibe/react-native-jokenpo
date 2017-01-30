/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Image,
} from 'react-native'

import Topo from './topo';

import Icone from './icone';


class Project extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      escolhaUsuario:'',
      escolhaComputador:''
    }
  }

  escolhaComputador(){
    return Math.floor(Math.random() * 3);
  }
  
  parseEscolhaCompuador(escolha){
    switch(escolha){
      case 0 :  return 'pedra';break;
      case 1 :  return 'papel';break;
      case 2 :  return 'tesoura';break;
    }
  }
  
  parseResultado(computador, usuario) {
    let resultado;
    if(computador =='pedra') {
      if(usuario == 'pedra') {
        resultado = 'Empatou';
      }
      if(usuario == 'papel') {
        resultado = 'Você ganhou';
      }
      
      if(usuario == 'tesoura') {
        resultado = 'Você perdeu';
      }
    }
    
    if(computador =='papel') {
      if(usuario == 'papel') {
        resultado = 'Empatou';
      }
      if(usuario == 'tesoura') {
        resultado = 'Você ganhou';
      }
      
      if(usuario == 'pedra') {
        resultado = 'Você perdeu';
      }
    }
    
    if(computador =='tesoura') {
      if(usuario == 'tesoura') {
        resultado = 'Empatou';
      }
      if(usuario == 'pedra') {
        resultado = 'Você ganhou';
      }
      
      if(usuario == 'papel') {
        resultado = 'Você perdeu';
      }
    }
    return resultado;
  }
  
  jokenpo(escolhaUsuario) {
    let numero = this.escolhaComputador();
    let escolhaComputador = this.parseEscolhaCompuador(numero);
    let resultado = this.parseResultado(escolhaComputador, escolhaUsuario);
    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }
  
  render() {
    return (
      <View >
        <Topo></Topo>
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5
          }}>
          
              <TouchableHighlight
              onPress={()=> this.jokenpo('papel')}
              activeOpacity={75 / 100}
              style={styles.botao}
              underlayColor={"rgba(160,43,43,1)"}>
              <Text style={styles.botaoText}>Papel</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=> this.jokenpo('pedra')}
              style={styles.botao}
              activeOpacity={75 / 100}
              underlayColor={"rgb(210,210,210)"}>
              <Text style={styles.botaoText}>Pedra</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=> this.jokenpo('tesoura')}
              style={styles.botao}
              activeOpacity={75 / 100}
              underlayColor={"rgb(210,210,210)"}>
              <Text style={styles.botaoText}>Tesoura</Text>
            </TouchableHighlight>
          
        </View>
        
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário'></Icone>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  botao: {
    backgroundColor: '#09c',
    padding: 5,
    borderColor: '#069',
    margin: 2
  },
  botaoText: {
    color: '#fff',
    margin: 5
  },
  txtResultado : {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 50,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('Project', () => Project);
