import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Task = (props) => {
  return (

    <View styles = {styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>

    )
}

const styles =  StyleSheet.create({

    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        flex:1,
        width: 100,
        height: 100
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        flex:1 
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        color:'black',
        maxWidth:'80%'
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }

});