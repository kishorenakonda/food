import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from './../components/SearchBar';
import yelp from '../api/yelp';

const searchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        console.log("<-- Inside search -->");
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            console.log("<-- response -->", response);
            setResults(response.data.businesses);
        } catch (exception) {
            console.log("<-- Exception is -->", exception);
            setErrorMessage('Error is : ' + exception);
        }
    }

    // call Search API when component is rendered --> Instructor says it is a BAD CODE
    // searchAPI('pasta');

    return (
        <View style={styles.background}>
            <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={(searchTerm) => searchAPI(searchTerm)}></SearchBar>
            <Text> {errorMessage} </Text>
            <Text> {term}</Text>
            <Text> We have found {results.length} results </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF'
    }
})

export default searchScreen;