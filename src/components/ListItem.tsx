import React, { useState } from "react";
import { Card, Text } from "@ui-kitten/components";
import { View } from "react-native";
import PropTypes from "prop-types";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";


export default function ListItem({ description }) {
    const [likes, setLikes] = useState(0);
    return (
      <Card>
        <Text> {description} </Text>
        <Text> {likes} Likes </Text>
        <View style={{ flexDirection: "row" }}>
          <LikeButton onPress={() => setLikes(likes + 1)} />
          <DislikeButton onPress={() => setLikes(likes - 1)} />
        </View>
      </Card>
    );
}

ListItem.propTypes = {
    description: PropTypes.string.isRequired
}
