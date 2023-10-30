import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export default function Header({ setTime, setCurrentTime, currentTime }) {

    const handlePress = (index) => {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60);
    }


    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            {options.map((element, index) => (
                <TouchableOpacity onPress={() => { handlePress(index) }}
                    key={index}
                    style={[style.itemStyle, currentTime != index && { borderColor: "transparent" }]}>
                    <Text style={{ fontWeight: "bold" }}>{element}</Text>
                </TouchableOpacity>
            ))}

        </View>
    );
}

const style = StyleSheet.create({
    itemStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        alignItems: "center",
        borderColor: "white",
        marginVertical: 30,
        borderRadius: 10
    }
})
