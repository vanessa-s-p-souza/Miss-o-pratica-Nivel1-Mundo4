import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState(''); // Gerenciamento do estado de texto

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)} // Atualiza o estado com o texto
        value={text} // A entrada é controlada pelo estado `text`
      />
      <Text style={styles.output}>
        {text
          .split(' ') // Divide o texto em palavras
          .map((word) => (word ? '🍕' : '')) // Substitui cada palavra por "🍕"
          .join(' ')}{' '}
        {/* Junta as palavras de volta com espaços */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 100,
    paddingHorizontal: 8,
  },
  output: {
    padding: 10,
    fontSize: 42,
    lineHeight: 50, // Garante espaçamento adequado entre linhas
  },
});

export default PizzaTranslator;
