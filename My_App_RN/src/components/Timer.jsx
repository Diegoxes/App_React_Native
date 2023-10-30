
import {View , Text,StyleSheet} from "react-native";
export default function Timer({time}){

    const formattedTime=`${Math.floor(time / 60).toString().padStart(2,"0")}:${(time % 60).toString().padStart(2,"0")}`; 


    return(
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#F2F2F2",
        padding:20,
        borderRadius:15
    },

    time:{
        fontSize:90,
        fontWeight:"bold",
        textAlign:"center"
    }
})