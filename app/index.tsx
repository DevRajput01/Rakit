import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.text}>Hello world</Text>
      <Text style={styles.text}>How are you?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#0a7ea4",
  },
});
