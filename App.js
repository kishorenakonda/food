import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"; // createAppContainer is imported from 'react-navigation' not from 'react-navigation-stack'
import searchScreen from "./src/screens/SearchScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { SignupScreen } from "./src/screens/SignupScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { OTPScreen } from "./src/screens/OTPScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    search: searchScreen,
    welcome: WelcomeScreen,
    signup: SignupScreen,
    register: RegisterScreen,
    otp: OTPScreen,
    resultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "welcome",
    defaultNavigationOptions: {
      title: "VOLO",
    },
  }
);

export default createAppContainer(navigator);
