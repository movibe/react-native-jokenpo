import React, { Component, } from 'react'
import { View, Image } from 'react-native'

class Topo extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
     <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            backgroundColor: "rgba(74,144,226,1)",
          }}>
          <Image source={require('./img/jokenpo.png')}/>
        </View> 
    )
  }
}

export default Topo