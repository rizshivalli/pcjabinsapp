import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";

const MainNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: true
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerShown: true
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const RootRouter = createAppContainer(MainNavigation);
export default RootRouter;
