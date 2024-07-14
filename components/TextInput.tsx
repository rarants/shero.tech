import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

export default function TextInput({ ...props }) {
  return (
    <Input
      style={styles.input}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    lineHeight: 19.1,
    fontSize: 14,
    fontWeight: '700'
  }
})