import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}></Feather>
            {/* One Way of writing text input and handling the props variable */}
            {/* <TextInput style={styles.inputStyle} placeholder="Search"
                autoCapitalize="none" autoCorrect={false}
                value={term} onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()} /> */}

            <TextInput style={styles.inputStyle} placeholder="Search"
                autoCapitalize="none" autoCorrect={false}
                value={term} onChangeText={onTermChange}
                onEndEditing={onTermSubmit} />
            {/* <Text> Search Bar </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        // borderWidth: 1,
        // borderColor: '#000',
        // borderRadius: 5
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;