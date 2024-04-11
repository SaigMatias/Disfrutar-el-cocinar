import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import HomeCard from "../components/HomeElements/HomeCard";
import HomeButton from "../components/HomeElements/HomeButton";
import HomeDisplay from "../components/HomeElements/HomeDisplay";
import HomeButtonCard from "../components/HomeElements/HomeButtonCard";
import { globalColor } from "../global/globalStyles";
import useSessionGet from "../Hooks/useSessionGet";
import LoadingMsg from "../components/Elements/LoadingMsg";

const Home = () => {
  const { isLoading, session } = useSessionGet();

  return (
    <View style={styles.containerSup}>
      {!isLoading ? (
        <>
          <Subtitle>Hola {session?.profile?.name}</Subtitle>

          <HomeDisplay balance={session?.balance} />

          <View style={styles.container}>
            <HomeButton refer="credit">Ingresar Retirar</HomeButton>
            <HomeButton refer="swap">Transferir</HomeButton>
            <HomeButton refer="credit-card">Crédito</HomeButton>
            <HomeButton refer="wallet">Invertir</HomeButton>
          </View>

          <HomeButtonCard />

          <View style={styles.containerColumn}>
            <Text style={styles.subtitle}>MOVIMIENTOS</Text>

            <FlatList
              data={session?.movements}
              style={{ height: 200, width: "100%" }}
              renderItem={({ item }) => (
                <HomeCard
                  detail={item.detail}
                  category={item.category}
                  date={item.date}
                  price={item.price}
                  flow={item.cashFlow}
                />
              )}
              keyExtractor={(item) => item.detail}
            />
          </View>
        </>
      ) : (
        <LoadingMsg />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerSup: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 20,
  },

  container: {
    flexDirection: "row",
    gap: 5,
  },

  containerColumn: {
    alignItems: "center",
  },

  subtitle: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: globalColor.highShadow,
    width: "100%",
    paddingBottom: 3,
    marginVertical: 10,
  },
});
