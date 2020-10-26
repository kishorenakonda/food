import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Button, Text } from 'react-native';

import externalStyles from '../css/common-styles';

export class SignupScreen extends Component {

    render() {
        return (
            <View>
                <View style={externalStyles.m_t_10}>
                    <TextInput style={externalStyles.input_box_m_all_10}
                        placeholder="Username" autoCapitalize="none"
                        autoCompleteType="off" onChangeText={(username) => { this.onUpdateUsername(username) }}>
                    </TextInput>
                </View>

                <View style={externalStyles.m_t_10}>
                    <TextInput style={externalStyles.input_box_m_all_10}
                        placeholder="Password" autoCapitalize="none"
                        autoCompleteType="off" onChangeText={(password) => { this.onUpdatePassword(password) }}>
                    </TextInput>
                </View>
            </View>
        )
    }
}