import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import ListItem from "./ListItem";

export default function HomeScreen() {
    return (
        <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text category="h1">HOME</Text>
            <ListItem description="cheese" />
        </Layout>
    );
}
