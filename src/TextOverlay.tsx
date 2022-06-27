import React from "react";
import { StyleSheet, StyleProp, Text, TextStyle, View } from "react-native";

type CanvasText = {
    position: { x: number; y: number };
    style?: StyleProp<TextStyle>;
    text: string;
};

type TextOverlayProps = { text?: CanvasText[] };

export function TextOverlay(props: TextOverlayProps) {
    return (
        <View pointerEvents="none" style={Styles.container}>
            {props.text?.map((item, index) => (
                <Text
                    key={index}
                    style={[item.style, {
                        left: item.position.x,
                        top: item.position.y,
                        position: "absolute"
                    }]}>
                    {item.text}
                </Text>
            ))}
        </View>
    );
}

const Styles = StyleSheet.create({
    container: { width: "100%", height: "100%", position: "absolute" }
});
