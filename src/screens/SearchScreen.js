import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const searchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((resultObj) => {
      // Price will be '$' || '$$' || '$$$'
      // return resultObj.price === price;
      if (resultObj.price === price) {
        return resultObj.price === price;
      }
      // Some results seems to be undefined from API
      // else {
      //   if (resultObj.price === undefined) {
      //     console.log("<-- Not matching undefined price -->", resultObj.price);
      //   }
      // }
    });
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      ></SearchBar>
      {/* <Text> {errorMessage} </Text> */}
      <Text> {term}</Text>
      <Text style={styles.resultsCount}>
        We have found {results.length} results
      </Text>

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        ></ResultsList>
        <ResultsList
          title="Bit Pricer"
          results={filterResultsByPrice("$$")}
        ></ResultsList>
        {/* <ResultsList
            title="Big Spender"
            results={filterResultsByPrice("$$$")}
          ></ResultsList> */}
        <ResultsList
          title="Bit Pricer"
          results={filterResultsByPrice("$$")}
        ></ResultsList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  resultsCount: {
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default searchScreen;
