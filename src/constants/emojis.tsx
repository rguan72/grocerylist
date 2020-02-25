import React from "react";
import { Text } from "react-native";

interface EmojiProps {
  symbol: string;
  label?: string;
}

const Emoji = ({ label, symbol }: EmojiProps) => (
  <Text aria-label={label ? label : ""} aria-hidden={label ? "false" : "true"}>
    {symbol}
  </Text>
);

function HandEmoji() {
  return <Emoji symbol="🖐️" label="hand" />;
}

export { HandEmoji };
