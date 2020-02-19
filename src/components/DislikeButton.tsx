import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";


export default function LikeButton({ onPress }) {
    return (
      <FontAwesome.Button
        backgroundColor="#FFFFFF"
        color="#000000"
        onPress={onPress}
        name="thumbs-down"
      />
    );
}

LikeButton.propTypes = {
  onPress: PropTypes.func.isRequired
};