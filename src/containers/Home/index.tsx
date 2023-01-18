import React, {useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const Home: React.FC<{data: {nome: string; codigo: string}[]}> = ({data}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Selecione uma opção');

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Tabela FIP</Text>
        <Text style={styles.label}>Marcas:</Text>
        <Button title={value} onPress={() => setOpen(true)} />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setOpen(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlashList
              data={[{nome: 'asdasd', codigo: ''}]}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    setValue(item.nome);
                    setOpen(false);
                  }}
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: '#A3A3A3',
                  }}>
                  <Text style={styles.modalText} key={item.codigo}>
                    {item.nome}
                  </Text>
                </TouchableOpacity>
              )}
              estimatedItemSize={27}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setOpen(false)}>
              <Text style={styles.textStyle}>FECHAR</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162135',
    padding: 16,
  },
  title: {
    color: '#cac8c8',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
  },
  dropdownItems: {
    borderRadius: 8,
    backgroundColor: '#cac8c8',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  button: {
    width: '80%',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
});

export default Home;
