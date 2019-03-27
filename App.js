import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Inbox from 'components/Inbox'
import Error from 'components/Error'
import { baseStyles } from 'styles/base'
import { IsUndefined, IsNullArray } from 'utils/helper'
import { SkypeIndicator } from 'react-native-indicators'
import { isIOS, isAndroid } from 'utils/platform'
import config from 'config/config'
const axios = require('axios');
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: undefined,
      isError: false,
      isFinish: false
    }
  }
  
  componentDidMount() {
    this.callBackendAPI()
      .then(res => {
        if ( res ){
          this.setState({ data: res, isFinish: true })
        }
      })
      .catch(err => {
        this.setState({ isError: true, isFinish: true  })
        console.log(err)
      });
  }

  callBackendAPI = async () => {
    const response = await fetch(config.domainURL + '/data') 

    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  _onPressNull = () => {
    this.setState({isError: false, data: []})
  };

  _onPressError = () => {
    this.setState({isError: true})
  };

  _onPressClear = () => {
    this.setState({isError: false, data: undefined, isFinish: false})
    this.callBackendAPI()
    .then(res => {
      if ( res ){
        this.setState({ data: res, isFinish: true })
      }
    })
    .catch(err => {
      this.setState({ isError: true, isFinish: true  })
      console.log(err)
    });
  };

  render() {
    // Handle data error
    if ( this.state.isError ){
      return(
        <TouchableOpacity onPress={this._onPressClear} style={baseStyles.container}>
          <Error
            status={'Error'}
            description={'please check/run -> node run-server.js'}
          />
        </TouchableOpacity>
      )
    }

    // Handle data error
    if (typeof (this.state.data) !== 'object' && this.state.isFinish === true ){
      return(
        <TouchableOpacity onPress={this._onPressClear} style={baseStyles.container}>
          <Error
            status={'Error'}
            description={''}
          />
        </TouchableOpacity>
      )
    }
    
    // Loading Data With Indicator
    if ( this.state.isFinish === false ){
      return(
        <View style={baseStyles.container}>
          <SkypeIndicator color='#BE007A' />
        </View>
      )
    }
    
    // Handle empty data
    if ( IsNullArray(this.state.data) ){
      return(
        <TouchableOpacity onPress={this._onPressClear} style={baseStyles.container}>
          <Error
            status={'No email data'}
          />
        </TouchableOpacity>
      )
    }
    
    return (
      <View style={baseStyles.container}>
        <Inbox
          data={this.state.data}
          pressnull={() => this._onPressNull()}
          presserror={() => this._onPressError()}
          pressclear={() => this._onPressClear()}
        />
      </View>
    );
  }
}