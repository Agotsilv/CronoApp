import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      btn: 'Iniciar',
      ultimoTimer: null
    }

    this.timer = null

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }


  vai(){ 
   
   if(this.timer !== null){
    //Pausar
    clearInterval(this.timer)
    this.timer = null

    this.setState({btn: 'Iniciar'})


   }else {
     this.timer = setInterval( () => {
       this.setState({numero: this.state.numero + 0.1})
     }, 100)

     this.setState({btn: 'Pausar'})
   }
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }
  this.setState({
    ultimoTimer: this.state.numero.toFixed(1),
    numero: 0, 
    btn: 'Iniciar'})
  }
  


  render(){
    return (
        <View style={styles.container}>
          <Image
          source={require('./src/cronometro.png')}
          style={styles.image}
          />

          <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>


        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai} >
              <Text style={styles.btnTexto}> {this.state.btn} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar} >
            <Text style={styles.btnTexto}> Limpar </Text>
          </TouchableOpacity>
        </View>

      <View style={styles.areaUltima}>
        <Text style={styles.TextTimer}>
         {this.state.ultimoTimer > 0 ? 'Último Tempo: ' + this.state.ultimoTimer + 's' : ''}
        </Text>

      </View>

     </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop:-160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent:  'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 18,
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40,
  },
  TextTimer: {
    fontSize:25,
    fontStyle: 'italic',
    color: '#FFF'
  }

})

export default App;