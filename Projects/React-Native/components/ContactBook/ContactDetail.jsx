import { StyleSheet, Switch, Text, View } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";
import { useState } from "react";
import RemoveContact from "./RemoveContact";

const ContactDetail = ({ renderItem }) => {
  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const highlight = isEnabled && {
    backgroundColor: globalColor.detailShadow,
    fontSize: 24,
  };

  return (
    <View style={[styles.container, highlight]}>
     <Text style={[globalStyles.paragraph, styles.top]}>
        nro {renderItem.id}
      </Text>
 
      <Text style={[globalStyles.paragraph, styles.top]}>Destacar</Text>

      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={[styles.top, styles.switch]}
      />

      <Text style={[globalStyles.paragraph, styles.name, highlight]}>
        {renderItem.name}
      </Text>

      <Text style={[globalStyles.paragraph, styles.nickname]}>
        &ldquo;{renderItem.nickname}&rdquo;
      </Text>

      <View style={styles.spanContainer}>
        <Text style={[globalStyles.paragraph, styles.span]}>CBU</Text>
        <Text style={[globalStyles.paragraph, styles.rest]}>
          {renderItem.cbu}
        </Text>
      </View>

      <View style={styles.spanContainer}>
        <Text style={[globalStyles.paragraph, styles.span]}>Alias</Text>
        <Text style={[globalStyles.paragraph, styles.rest]}>
          {renderItem.alias}
        </Text>
      </View>

      <Text style={[globalStyles.paragraph, styles.rest]}>
        {renderItem.bank}
      </Text>

      <RemoveContact contactName={renderItem.name} contactId={renderItem.id} />
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColor.white,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: globalColor.highShadow,
    borderRadius: 20,
    elevation: 3,
  },
  top: {
    alignSelf: "flex-end",
    fontSize: 11,
    fontWeight: "bold",
    color: globalColor.highDark,
  },
  switch: {
    height: 15,
    width: 30,
  },
  name: {
    color: globalColor.midShadow,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 0,
  },
  nickname: {
    color: globalColor.highDark,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  rest: {
    color: globalColor.midShadow,
  },
  span: {
    fontWeight: "bold",
    color: globalColor.midShadow,
  },

  spanContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
