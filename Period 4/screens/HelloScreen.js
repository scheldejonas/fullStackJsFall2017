import React from 'react';
import { StyleSheet, Text, View, Button, Image, Clipboard, Alert } from 'react-native';
import UndskyldComp from '../components/SpørgsmålsComp';
import { observer } from "mobx-react";
import helloStore from "../stores/HelloStore";
import TopComp from '../components/TopComp';


@observer
export default class HelloScreen extends React.Component {

    static navigationOptions = {
      drawerLabel: 'Spørgsmål',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };

    setClipBoard(){
      Clipboard.setString("Hello world, mit spørgsmål er: " + undskyldStore.currentText);
      Alert.alert("Spørgsmål tilføjet udklipsholderen!");
    }
  
    render() {
      return (
        <View style={{flex: 1}}>
          <TopComp />
          <View style={{flex: 2, alignItems: 'center'}}>
            <Text style={styles.text}>Et spørgsmål til verden</Text>
            <UndskyldComp style={styles.text}/>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Button
              onPress={() => undskyldStore.incrementButtonPressed()}
              title="Nyt Spørgsmål"
            />
            <Text>{"\n"}</Text>
            <Button
              onPress={() => this.setClipBoard()}
              color="black" //make white
              title="Kopier til Udklipsholder"
            />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    positionInBottom: {
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 0,
        backgroundColor: 'red',
        zIndex: 100,
    },
    icon: {
      width: 24,
      height: 24,
    },
    text: {
      fontSize: 20,
      textAlign: 'center'
    }
});