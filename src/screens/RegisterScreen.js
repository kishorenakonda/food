import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { View, Button, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'
import commonStyles from '../css/common-styles';

export class RegisterScreen extends Component {
    mobilenumberfieldRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            mobileNumber: '',
            // buttonBackgroundColor: '#d9dde2',
            buttonBackgroundColor: '#ff1654',
            iconStatusForPassword: 'visibility-off',
            iconStatusForConfirmPassword: 'visibility-off',
            password: '',
            confirmpassword: '',
            showPassword: true,
            showConfirmPassword: true,
            isDisableRegister: false
        }
    }

    onChangePasswordType = (source) => {
        console.log("source", source);
        let newState;
        if (source && source.toLowerCase() === 'password') {
            newState = this.getNewStateForPassword();
        } else if (source && source.toLowerCase() === 'confirm-password') {
            newState = this.getNewStateForConfirmPassword();
        }

        console.log("newState =>", newState);

        // set new state value
        this.setState(newState)
    };

    getNewStateForConfirmPassword() {
        let stateOfConfirmPassword;
        console.log("inside confirm password");

        if (this.state.showConfirmPassword) {
            stateOfConfirmPassword = {
                iconStatusForConfirmPassword: 'visibility',
                showConfirmPassword: false,
                confirmpassword: this.state.confirmpassword,
            }
        } else {
            stateOfConfirmPassword = {
                iconStatusForConfirmPassword: 'visibility-off',
                showConfirmPassword: true,
                confirmpassword: this.state.confirmpassword,
            }
        }

        return stateOfConfirmPassword;
    }

    getNewStateForPassword() {
        let stateOfPassword;
        if (this.state.showPassword) {
            stateOfPassword = {
                iconStatusForPassword: 'visibility',
                showPassword: false,
                password: this.state.password
            }
        } else {
            stateOfPassword = {
                iconStatusForPassword: 'visibility-off',
                showPassword: true,
                password: this.state.password
            }
        }

        return stateOfPassword;
    }

    onUpdateDetails(keyname, value) {
        const stateObj = {};
        stateObj[keyname] = value;
        this.setState(stateObj);
    }

    onRegister() {
        const postJson = {
            fullName: this.state.fullName,
            email: this.state.email,
            mobileNumber: this.state.mobileNumber,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword
        };

        console.log("<--- postJson --->", postJson)
        const sendParams = {
            mobileNumber: this.state.mobileNumber
        };
        this.props.navigation.navigate('otp', sendParams)
    }

    render() {
        const styles = StyleSheet.create({
            m_t_10: {
                marginTop: 10
            },
            input_box_css: {
                borderColor: '#ccc',
                borderBottomWidth: 1,
                fontSize: 20,
                paddingBottom: 10
            },
            view_spacing: {
                marginTop: 20,
                marginBottom: 20,
                paddingHorizontal: 10
            },
            button_css: {
                borderRadius: 4,
                padding: 20,
                alignItems: 'center'
            },
            button_secondary_color: {
                backgroundColor: '#d9dde2'
            },
            button_default_color: {
                backgroundColor: '#ff1654'
            },
            text_center: {
                textAlign: 'center'
            },
            m_lr_10: {
                marginRight: 40,
                marginLeft: 40
            },
            passwordViewContainer: {
                flexDirection: 'row',
            },
            password_text: {
                flex: 1
            },
            eyeIcon: {
                // alignSelf: 'flex-end'
                alignSelf: 'center',
            }
        });

        return (
            <View>
                <View style={commonStyles.overall_padding}>
                    <Text style={[commonStyles.text_heading, commonStyles.padding_tb_20]}> Register to Volo </Text>

                    <View style={styles.view_spacing}>
                        <TextInput style={styles.input_box_css}
                            placeholder="Full Name" autoCapitalize="none"
                            autoCompleteType="off" onChangeText={(fullname) => this.onUpdateDetails('fullName', fullname)}>
                        </TextInput>
                    </View>

                    <View style={styles.view_spacing}>
                        <TextInput style={styles.input_box_css}
                            placeholder="Email" autoCapitalize="none"
                            autoCompleteType="off" onChangeText={(email) => this.onUpdateDetails('email', email)}>
                        </TextInput>
                    </View>

                    <View style={styles.view_spacing}>
                        <TextInput style={styles.input_box_css}
                            placeholder="Mobile Number"
                            keyboardType="phone-pad" autoCompleteType="off"
                            onChangeText={(mobileNumber) => this.onUpdateDetails('mobileNumber', mobileNumber)}>
                        </TextInput>
                    </View>

                    <View style={[styles.view_spacing, styles.passwordViewContainer]}>
                        <TextInput style={[styles.input_box_css, styles.password_text]}
                            placeholder="Password" autoCapitalize="none"
                            value={this.state.password}
                            // onChangeText={this.onChangePassword}
                            onChangeText={(password) => this.onUpdateDetails('password', password)}
                            secureTextEntry={this.state.showPassword} autoCompleteType="off">
                        </TextInput>
                        <Icon style={styles.eyeIcon}
                            name={this.state.iconStatusForPassword}
                            size={30}
                            onPress={() => this.onChangePasswordType('password')}
                        />
                    </View>

                    <View style={[styles.view_spacing, styles.passwordViewContainer]}>
                        {/* <TextInput style={styles.input_box_css}
                            placeholder="Confirm Password" autoCapitalize="none"
                            autoCompleteType="off">
                        </TextInput> */}
                        <TextInput style={[styles.input_box_css, styles.password_text]}
                            placeholder="Confirm Password" autoCapitalize="none"
                            value={this.state.confirmpassword}
                            // onChangeText={this.onChangeConfirmPassword}
                            onChangeText={(confirmpassword) => this.onUpdateDetails('confirmpassword', confirmpassword)}
                            secureTextEntry={this.state.showConfirmPassword} autoCompleteType="off">
                        </TextInput>
                        <Icon style={styles.eyeIcon}
                            name={this.state.iconStatusForConfirmPassword}
                            size={30}
                            onPress={() => this.onChangePasswordType('confirm-password')}
                        />
                    </View>

                    <View style={styles.view_spacing}>
                        {/* <Button style={styles.button_css} title="Register"> </Button> */}
                        <TouchableOpacity
                            style={[styles.button_css, { backgroundColor: this.state.buttonBackgroundColor }]}
                            disabled={this.state.isDisableRegister}
                            onPress={() => {
                                console.log("clicked on Register")
                                this.onRegister();
                            }}>
                            <Text style={commonStyles.text_white}> Register </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view_spacing}>
                        <Text style={[styles.text_center, styles.m_lr_10]}>
                            By registering you agree to
                           <Text style={commonStyles.text_default_color}> Term & Conditions </Text>
                            <Text> and </Text>
                            <Text style={commonStyles.text_default_color}> Privacy Policy </Text>
                            <Text> of the Volo </Text>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

