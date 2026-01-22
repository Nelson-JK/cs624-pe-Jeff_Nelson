import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  // INPUT
  const name = "Jeff Nelson";
  const degreeProgram = "MSCS";
  const school = "STC";

  // PROCESS + OUTPUT
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{degreeProgram}</Text>
      <Text style={styles.text}>{school}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 6,
  },
});
