import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetails";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>
        {title} ({results.length})
      </Text>
      {/* <Text> Search Results : {results.length} </Text> */}

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default ResultsList;
