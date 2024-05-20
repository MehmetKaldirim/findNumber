import { Text, View, StyleSheet } from "react-native";
function GameOverScreen() {
  return (
    <View>
      <Text>Game is over!</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
