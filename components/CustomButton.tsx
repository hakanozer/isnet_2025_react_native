import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = (props: {title?: string, onPressFnc?: Function}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.onPressFnc ? props.onPressFnc() : (() => {})}>
        <Text style={styles.buttonText}>{props.title ?? 'Send'}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    }
})