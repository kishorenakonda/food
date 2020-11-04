import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
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
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("resultsShow", { id: item.id });
              }}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
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

// export default ResultsList;
// withNavigation is a  special function with which we can navigate directly from stack navigator to the component
export default withNavigation(ResultsList);
