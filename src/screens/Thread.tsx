import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { Layout, Button, Input } from "@ui-kitten/components";
import ListItem from "../components/ListItem";

interface Comment {
  user: string;
  description: string;
}

export default function Thread() {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");

  function addComment(comment: Comment) {
    setComments(comments.concat(comment));
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#F0F0F0"
      }}
    >
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <ListItem user={item.user} description={item.description} />
        )}
      />
      <Layout
        style={{
          justifyContent: "flex-end",
          flex: 1,
          backgroundColor: "#F0F0F0"
        }}
      >
        <Input
          placeholder="Add comment"
          value={value}
          onChangeText={setValue}
        />
        <Button
          onPress={() => {
            addComment({
              user: "richard",
              description: value
            });
            setValue("");
          }}
          style={styles.mt0}
          disabled={value === ""}
        >
          Submit
        </Button>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: "flex-end",
    flex: 1
  },
  flex: {
    display: "flex"
  },
  mt0: {
    marginTop: 0
  }
});
