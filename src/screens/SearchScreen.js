import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from './../components/SearchBar';
import yelp from '../api/yelp';

const searchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchAPI = async () => {
        console.log("<-- Inside search -->");
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: term,
                location: 'san jose'
            }
        });
        console.log("<-- response -->", response);
        setResults(response.data.businesses);
    }

    return (
        <View style={styles.background}>
            <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchAPI()}></SearchBar>
            {/* <Text> Search Screen </Text> */}
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