import React, { Component } from "react";
import { Text, FlatList, StyleSheet, View, Image } from "react-native";
import yelp from "../api/yelp";

class ResultsShowScreen extends Component {
  constructor(props) {
    super(props);
    const id = this.props.navigation.getParam("id");
    this.state = {
      results: [],
    };
    console.log("<-- id -->", id);
    this.getResults(id);
  }

  getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    this.setState({
      results: response.data,
    });
  };

  render() {
    return (
      <View>
        <Text style={styles.name}> {this.state.results.name} </Text>
        <FlatList
          data={this.state.results.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginTop: 10,
  },
  name: {
    fontSize: 20,
  },
});

export default ResultsShowScreen;
