import React, { useState } from "react";
import { Card, Text, Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import { HandEmoji } from "../constants/emojis";

export default function ListItem({ user, description }) {
  const [likes, setLikes] = useState(0);
  return (
    <Card style={styles.card}>
      <Text>
        <HandEmoji />
        <Text category="h5"> {user} </Text>
      </Text>
      <Text> {description} </Text>
      <Text> {likes} Likes </Text>
      <Layout style={{ flexDirection: "row" }}>
        <LikeButton onPress={() => setLikes(likes + 1)} />
        <DislikeButton onPress={() => setLikes(likes - 1)} />
      </Layout>
    </Card>
  );
}

ListItem.propTypes = {
  user: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  card: {
    minWidth: 100
  }
});
