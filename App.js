import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RootRouter from "./src/RootRouter.js";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <RootRouter />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
