import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './style';
import createStyles, { fonts, colors, padding, dimensions } from 'styles/base'
class Error extends Component {
  constructor(props){
    super(props);

  }
  
  componentDidMount() {

  }

  render() {
    const { status, description } = this.props
    return (
      <View style={styles.container}>
         <Image
          style={{width: dimensions.fullWidth / 2 , height: dimensions.fullWidth / 2}}
          source={require('../../../assets/alert.png')}
        />
        <View style={{paddingVertical: padding.md}}>
          <Text style={styles.textTitle}>{status}</Text>
        </View>
        <View style={{paddingVertical: padding.md}}>
          <Text style={styles.textTitle}>{description}</Text>
        </View>
      </View>
    );
  }
}

export default Error;
