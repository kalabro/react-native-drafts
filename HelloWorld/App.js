import React, {useState} from 'react';
import {Text, TextInput, SafeAreaView} from 'react-native';

const HelloWorldApp = () => {
  const [userName, setUserName] = useState();
  const [formText, setFormText] = useState('');

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {userName ? (
        <Text>Hello, {userName}!</Text>
      ) : (
        <TextInput
          style={{alignSelf: 'stretch', height: 60, textAlign: 'center'}}
          placeholder="Type your name"
          onChangeText={text => setFormText(text)}
          onSubmitEditing={() => setUserName(formText)}
          value={formText}
        />
      )}
    </SafeAreaView>
  );
};

export default HelloWorldApp;
