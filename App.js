import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Task} from './src/components/Task';

const App = () => {
  const [task, settask] = useState();
  const [Itemtask, setItemtask] = useState([]);

  const handleAddtask = () => {
    Keyboard.dismiss();
    setItemtask([...Itemtask, task]);
    settask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...Itemtask];
    itemsCopy.splice(index, 1);
    setItemtask(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTilte}>Today´s task</Text>
          <View style={styles.items}>
            {Itemtask.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapeer}>
        <TextInput
          style={{...styles.input, color: 'black'}}
          placeholder={'write task'}
          onChangeText={text => settask(text)}
          value={task}
        />

        <TouchableOpacity onPress={() => handleAddtask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 25,
    paddingEnd: 50,
  },
  sectionTilte: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 40,
  },
  writeTaskWrapeer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    color: 'black',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addtext: {
    color: 'black',
  },
});
export default App;
