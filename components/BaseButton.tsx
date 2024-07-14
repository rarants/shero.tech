import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as Btn } from 'react-native-paper'

export default function BaseButton({ ...props }) {
  return (
    <Btn
      children={undefined} style={[
        styles.button,
      ]}
      labelStyle={styles.text}
      {...props}    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#E06FA9',
    borderRadius: 8.4,
    padding: 2,
    shadowColor: '#AD5C86',
    shadowOpacity: 1,
    margin: 2
  },
  text: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 19.1,
    textTransform: 'uppercase',
    color: '#FFFFFF'
  },
})