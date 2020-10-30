import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    console.log("<-- Inside search -->");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      // console.log("<-- response -->", response);
      setResults(response.data.businesses);
    } catch (exception) {
      console.log("<-- Exception is -->", exception);
      setErrorMessage("Error is : " + exception);
    }
  };

  // call Search API when component is rendered --> Instructor says it is a BAD CODE
  // searchAPI('pasta');

  //   useEffect() will be called multiple times as it is a hook concept
  //   To call any method only once by using useEffect , try useEffect(()={}, []);
  //   Empty array after the method will stop calling the method multiple times

  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return [searchAPI, results, errorMessage];
};
