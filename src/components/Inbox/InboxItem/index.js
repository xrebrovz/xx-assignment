import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import { getRandomColor, IsUndefined } from 'utils/helper'

class InboxItem extends Component {
  constructor(props){
    super(props);

  }
  
  componentDidMount() {

  }

  _onPress = () => {

  };

  render() {
    // Handle data error data null/undefined/string
    if (this.props.item){
      if (typeof (this.props.item) !== 'object') {
        return (<View></View>)
      }
    }else{
      return (<View></View>)
    }

    let color = getRandomColor()
    return (
      <TouchableOpacity style={styles.box} onPress={this._onPress}>
        <View style={styles.profileBox}>
          <View style={[styles.circleBox, {backgroundColor: color}]}>
            <Text style={{color: 'white'}}>{this.props.item.from ? this.props.item.from.name.substring(0, 1) : null}</Text>
          </View>
        </View>
        <View>
          <View style={styles.textbox}>
            <Text numberOfLines={1} style={styles.textHeader}>{this.props.item.from ? this.props.item.from.name : null}</Text>
          </View>
          <View style={styles.textbox}>
            <Text numberOfLines={1} style={styles.textTitle}>{this.props.item.subject}</Text>
          </View>
          <View style={styles.textbox}>
            <Text numberOfLines={1} style={styles.textSubtitle}>{this.props.item.body}</Text>
          </View>
        </View>
        <View style={{flex: 1,width: '100%', justifyContent: 'center', alignItems: 'center', }}>
        <View style={styles.timebox}>
          <Text style={styles.textTime}>{this.props.item.time}</Text>
        </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default InboxItem;
