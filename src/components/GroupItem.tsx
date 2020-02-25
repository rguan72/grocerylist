import React, { useState } from "react";
import { Card, CardHeader, Button, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function GroupItem({ title, description, onPress }) {
  return (
    <Card
      header={() => (
        <CardHeader title={title} description={description} onPress={onPress} />
      )}
      onPress={onPress}
    >
      <Text> People discuss things here every day! </Text>
    </Card>
  );
}

GroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
