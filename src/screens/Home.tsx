import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import GroupItem from "../components/GroupItem";

export default function HomeScreen({ navigation }) {
  return (
    <Layout>
      <GroupItem
        title="Women in Tech"
        description="Cool group where we dicuss things"
        onPress={() => navigation.navigate("Thread")}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  m: {
    margin: 20
  }
});
