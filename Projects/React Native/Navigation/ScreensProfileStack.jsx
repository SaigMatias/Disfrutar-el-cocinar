import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopBar from "../components/TopBar/TopBar";
import About from "../screens/About";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

const ScreensProfileStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Perfil"
        screenOptions={() => {
          return {
            animation: "slide_from_right",
            header: ({ navigation, route }) => {
              return <TopBar navigation={navigation} title={route.name} />;
            },
          };
        }}
      >
        <Stack.Screen name="Perfil" component={About} />
        <Stack.Screen name="Foto de perfil" component={ImageSelector} />
      </Stack.Navigator>
    </>
  );
};

export default ScreensProfileStack;
