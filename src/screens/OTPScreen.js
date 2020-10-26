import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { TextInput } from 'react-native';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import commonStyles from '../css/common-styles';

export class OTPScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobilenumber: (props && props.navigation && props.navigation.state && props.navigation.state.params
                && props.navigation.state.params.mobileNumber) ? props.navigation.state.params.mobileNumber : '00000',
            otpArray: [],
            otpString: '',
            buttonBackgroundColor: '#ff1654',
            isDisableVerify: true,
            noOfOTPBoxes: 4
        }
    }

    onEnterOTP(inputvalue, index) {
        let { otpArray } = this.state;
        otpArray[index] = inputvalue;
        this.setState({
            otpArray
        });

        let otpString = '';
        for (let i = 0; i < this.state.otpArray.length; i++) {
            otpString = otpString + this.state.otpArray[i];
        }

        if (otpString && otpString.length === this.state.noOfOTPBoxes) {
            this.setState({
                isDisableVerify: false
            })
        } else {
            this.setState({
                isDisableVerify: true
            })
        }
        this.setState({
            otpString: otpString
        })

        // otpstring is getting updated only 3 times because the onChangeText is triggred 3 times
        // console.log("state otpstring", this.state);
    }

    onVerify() {
        console.log("<--- Entered OTP is --->", this.state.otpString);
    }

    onClickChangeNumber() {
        console.log("<-- Inside Change Number Method -->");
    }

    onClickResend() {
        console.log("<--- Inside Resend --->");
    }

    render() {
        const styles = StyleSheet.create({
            padding_lr_10: {
                paddingLeft: 10,
                paddingRight: 10
            },
            otp_css: {
                fontSize: 30,
                padding: 30,
                borderRadius: 10
            },
            button_css: {
                borderRadius: 4,
                padding: 20,
                alignItems: 'center'
            },
            button_box_shadow_enabled: {
                backgroundColor: '#ff1654',
                shadowColor: "#000",
                shadowOffset: {
                    width: 100,
                    height: 120,
                },
                shadowOpacity: 0.1,

                elevation: 15
            },
            enabled_button: {
                backgroundColor: '#ff1654'
            },
            disabled_button: {
                backgroundColor: '#ccc'
            }
        });

        return (
            <View>
                <View style={commonStyles.view_spacing}>
                    <Text style={[commonStyles.text_heading, commonStyles.padding_tb_20]}>
                        <Text> Enter 4 digit code sent </Text>
                    </Text>
                    <Text style={[commonStyles.text_heading]}>
                        <Text> to you at </Text>
                        <Text style={commonStyles.text_default_color}> {this.state.mobilenumber} </Text>
                    </Text>
                </View>

                <View style={commonStyles.view_spacing}>
                    <FlatList
                        numColumns={4}
                        keyExtractor={(item, index) => item.key}
                        data={[0, 1, 2, 3]}
                        renderItem={({ index }) => {
                            return (
                                <View style={[styles.padding_lr_10, commonStyles.m_t_20]}>
                                    <TextInput style={[styles.otp_css, commonStyles.b_all_1]}
                                        value={this.state.otpArray[index]}
                                        maxLength={1}
                                        keyboardType="numeric" autoCompleteType="off"
                                        onChangeText={(inputvalue) => this.onEnterOTP(inputvalue, index)}>
                                    </TextInput>
                                </View>
                            )
                        }}
                    />
                </View>

                <View style={commonStyles.view_spacing}>
                    <TouchableOpacity
                        style={
                            [
                                styles.button_css,
                                this.state.isDisableVerify ? styles.disabled_button : styles.enabled_button
                            ]
                        }
                        disabled={this.state.isDisableVerify}
                        onPress={() => {
                            console.log("clicked on verify")
                            this.onVerify();
                        }}>
                        <Text style={commonStyles.text_white}> Verify </Text>
                    </TouchableOpacity>
                </View>

                <View style={[commonStyles.view_spacing, commonStyles.text_center]}>
                    <Text style={commonStyles.text_grey, commonStyles.fs_20}>
                        Didn't receive a verification code ?
                    </Text>
                    <Text style={[commonStyles.text_default_color, commonStyles.fs_20, commonStyles.p_t_10]}>
                        <Text onPress={this.onClickResend}> Resend Code | </Text>
                        <Text onPress={this.onClickChangeNumber}> Change number </Text>
                    </Text>
                </View>
            </View>
        )
    }
}