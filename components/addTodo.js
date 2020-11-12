import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const addTodo = ({ addTodoHandler }) => {
  const [text, setText] = useState('')
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={(val) => setText(val)}
      />
      <Button onPress={() => addTodoHandler(text)} title='Add Todo' />
    </View>
  )
}

export default addTodo

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: '#ddd',
  },
})
