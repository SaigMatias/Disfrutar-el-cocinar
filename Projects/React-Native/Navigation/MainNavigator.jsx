// import ScreensLoginNav from "./ScreensLoginNav";
import ScreensTabs from "./ScreensTabs";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useGetProfileImageQuery } from "../app/Service/userProfileApi";
import { useEffect, useState } from "react";
import { setImageCam } from "../features/Auth/AuthSlice";
import { getUserSession } from "../db";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopBar from "../components/TopBar/TopBar";
import Login from "../screens/Login";
import SingUp from "../screens/SingUp";

const MainNavigator = () => {
  const [userSession, setUserSession] = useState(false);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data: userImage } = useGetProfileImageQuery(user.localId);


  // Device Camera
  useEffect(() => {
    if (userImage) {
      dispatch(setImageCam(userImage));
    }
  }, []);

  // SQLite
  useEffect(() => {
    const checkUserSession = async () => {
      const userSession = await getUserSession();
      if (userSession) {
        setUserSession(true);
        console.log("Session Log");
        // console.log(userSession);
      }
    };
    checkUserSession();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={userSession ? "Tabs" : "Login"}
        screenOptions={() => {
          return {
            animation: "slide_from_right",
            header: ({ navigation, route }) => {
              return (
                route.name !== "Tabs" && (
                  <TopBar navigation={navigation} title={route.name} />
                )
              );
            },
          };
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrarse" component={SingUp} />
        <Stack.Screen name="Tabs" component={ScreensTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
