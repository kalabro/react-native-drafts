import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Animated,
} from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    alignSelf: 'stretch',
    height: 60,
    textAlign: 'center',
  },
});

const HelloWorldApp = () => {
  const [userName, setUserName] = useState();
  const [formText, setFormText] = useState('');
  const [animatedText] = useState(new Animated.Value(0));

  useEffect(() => {
    if (userName) {
      Animated.timing(animatedText, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [animatedText, userName]);

  return (
    <SafeAreaView style={styles.containerView}>
      {userName ? (
        <Animated.Text style={{opacity: animatedText}}>
          Hello, {userName}!
        </Animated.Text>
      ) : (
        <TextInput
          style={styles.textInput}
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
