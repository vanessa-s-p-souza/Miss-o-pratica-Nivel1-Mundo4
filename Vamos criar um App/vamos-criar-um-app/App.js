// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [screen, setScreen] = useState('Cadastro');
  const [fornecedores, setFornecedores] = useState([]);

  return (
    <View style={styles.container}>
      {screen === 'Cadastro' ? (
        <CadastroScreen
          onAddFornecedor={(fornecedor) => setFornecedores([...fornecedores, fornecedor])}
          navigateToList={() => setScreen('Listagem')}
        />
      ) : (
        <ListagemScreen fornecedores={fornecedores} navigateToCadastro={() => setScreen('Cadastro')} />
      )}
    </View>
  );
}

function CadastroScreen({ onAddFornecedor, navigateToList }) {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categorias, setCategorias] = useState('');
  const [logo, setLogo] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLogo(result.assets[0].uri);
    }
  };

  const handleAddFornecedor = () => {
    if (nome && endereco && contato && categorias) {
      onAddFornecedor({ nome, endereco, contato, categorias, logo });
      setNome('');
      setEndereco('');
      setContato('');
      setCategorias('');
      setLogo(null);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Cadastro de Fornecedores</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="Contato" value={contato} onChangeText={setContato} />
      <TextInput style={styles.input} placeholder="Categorias de produtos" value={categorias} onChangeText={setCategorias} />
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>{logo ? 'Alterar Logotipo' : 'Upload Logotipo'}</Text>
      </TouchableOpacity>
      {logo && <Image source={{ uri: logo }} style={styles.logo} />}
      <TouchableOpacity style={styles.button} onPress={handleAddFornecedor}>
        <Text style={styles.buttonText}>Adicionar Fornecedor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton} onPress={navigateToList}>
        <Text style={styles.secondaryButtonText}>Ir para Lista de Fornecedores</Text>
      </TouchableOpacity>
    </View>
  );
}

function ListagemScreen({ fornecedores, navigateToCadastro }) {
  const [search, setSearch] = useState('');
  const [filteredFornecedores, setFilteredFornecedores] = useState(fornecedores);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredFornecedores(
      fornecedores.filter((fornecedor) =>
        fornecedor.nome.toLowerCase().includes(text.toLowerCase()) ||
        fornecedor.categorias.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>Listagem de Fornecedores</Text>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar por nome ou categoria"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredFornecedores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            {item.logo && <Image source={{ uri: item.logo }} style={styles.logoSmall} />}
            <View style={styles.listDetails}>
              <Text style={styles.listTitle}>{item.nome}</Text>
              <Text>{item.categorias}</Text>
              <Text>{item.endereco}</Text>
              <Text>{item.contato}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyList}>Nenhum fornecedor encontrado.</Text>}
      />
      <TouchableOpacity style={styles.secondaryButton} onPress={navigateToCadastro}>
        <Text style={styles.secondaryButtonText}>Voltar para Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  secondaryButtonText: {
    color: '#333',
  },
  listItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1,
  },
  listDetails: {
    marginLeft: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
  },
  logoSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
});
