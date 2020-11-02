import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerView}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}> {result.name} </Text>
      <Text style={styles.m_b_10}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    borderRadius: 4,
    height: 120,
  },
  name: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  m_b_10: {
    marginBottom: 10,
  },
});

export default ResultsDetail;
