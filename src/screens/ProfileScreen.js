import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { getRequest } from "../server/api";
import { ActivityIndicator, Card, Surface } from "react-native-paper";

const ProfileScreen = () => {
  const [data, setData] = useState([]);
  const getUserData = async () => {
    const errorFreeResponse = await getRequest("comments");
    setData(errorFreeResponse);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {!data ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={data}
            initialNumToRender={50}
            renderItem={(item, index) => {
              return (
                <View>
                  <Card
                    style={{ backgroundColor: "#F2F2F2" }}
                    onPress={() => {
                      console.log(item.item.id);
                    }}
                  >
                    <Surface style={{ elevation: 4, margin: "5%" }}>
                      <View style={{ margin: "5%" }}>
                        <Text>{`Name is ${item.item.name}`}</Text>
                        <Text>{`email is ${item.item.email}`}</Text>
                        <Text>{`Description is is ${item.item.body}`}</Text>
                      </View>
                    </Surface>
                  </Card>
                </View>
              );
            }}
          />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default ProfileScreen;
