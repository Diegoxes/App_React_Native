
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import React from 'react';
//import {Audio} from "expo-av para audio"
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];
export default function App() {
  const [isWorking, setIsWorking] = useState(false); //determina si esta trabajando o descansando 
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMODOR" | "SHORTBREAK" | "BREAK");
  const [isActive, setIsActive] = useState(false);// si el temporizador esta activo

  const handleStartStop = () => {
    setIsActive(!isActive);//para hacerlo dinamico , con el click cambia de true a false y de false a true
  }

  /*async function playSound(){
      const{sound}=await Audio.Sound.createAsync(require("ruta"))
      await sound.playAsync();
  }*/

  useEffect(() => {
    let interval = null;
    if (isActive) {
      //run timer
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000);
    }
    else {
      //clear interval
      clearInterval(interval);

    }


    if (time === 0) {
      setIsActive(false);
      //setIsWorking(!isWorking);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500); // si esoy en pomodoro lo resetea 1500 , pero si estoy descansando lo pone 5
    }

    return () => clearInterval(interval);// se retorna el clear para no tener muchas funciones interval ejecutandose



  }, [isActive, time])
  // return ()=>clearInterval(interval)
  //setIsWorking((prev)=>!prev);
  return (
    //SafeAreaView solo funciona para IOS 


    <View
      style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Text style={styles.text}>¡Pomodoro!</Text>

      <Header
        setTime={setTime}
        currentTime={currentTime} setCurrentTime={setCurrentTime} />
      <Timer time={time} />
      <TouchableOpacity onPress={() => { handleStartStop() }}
        style={styles.button}>
        <Text style={{ color: "white", fontweight: "bold" }}>{isActive ? "Stop" : "Start"}
        </Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 30,
    marginVertical: 20,
    paddingHorizontal: 15,
    /*borderWidth:10,
    borderColor:"blue"*/

  },

  text: {
    fontSize: 34, fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15
  }
});
