import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text> Welcome </Text>
            {/* <Button title="go to register"
                onPress={() => {
                    // props.navigation.navigate('Home')
                    navigation.navigate('register')
                }}
            >
            </Button> */}

            <Button title="go to food app"
                onPress={() => {
                    // props.navigation.navigate('Home')
                    navigation.navigate('search')
                }}
            >
            </Button>
        </View>
    )
}

export default WelcomeScreen;