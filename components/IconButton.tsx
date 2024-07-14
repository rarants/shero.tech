import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as Btn } from 'react-native-paper'

export default function IconButton({ ...props }) {
  return (
    <Btn
      children={undefined} style={[
        styles.button,
      ]}
      {...props}    />
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
    backgroundColor: '#E06FA9',
    borderRadius: 50,
    paddingVertical: 2,
    shadowColor: '#AD5C86',
    shadowOpacity: 1,
    margin: 2
  }
})