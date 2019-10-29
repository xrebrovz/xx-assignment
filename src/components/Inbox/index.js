import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Item from 'components/Inbox/InboxItem'
import styles from './style';

class Inbox extends Component {
  constructor(props){
    super(props);

  }
  
  componentDidMount() {
    console.log('X8')
    console.log('X3')
    console.log('X4')
    console.log('X7')
    console.log('X10')
    console.log('X9')
  }

  gg = () => (
    console.log('X6')
  );

  _renderItem = ({item}) => (
    <Item
      onPressItem={this._onPressItem}
      item={item}
    />
  );

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "95%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewBox}>        
          <Text style={styles.textHeader}>Inbox</Text>
          <TouchableOpacity onPress={this.props.pressnull}>
            <Text style={styles.textSpecial}>Null</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.presserror}>
            <Text style={styles.textSpecial}>Error</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.pressclear}>
            <Text style={styles.textSpecial}>Refresh</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPress}>
            <Text style={styles.textMenu}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>

        </View>
        <View>
          <FlatList
          style={styles.listBox}
            keyExtractor={(item, index) => 'key'+index}
            data={this.props.data}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </View>
      </View>
    );
  }
}

export default Inbox;
