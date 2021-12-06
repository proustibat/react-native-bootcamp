import React from 'react';
import {StyleSheet} from "react-native";
import {TextInput} from "react-native-paper";
import {TextInputProps} from "react-native-paper/lib/typescript/components/TextInput/TextInput";

const styles = StyleSheet.create({
    root: {
        paddingVertical: 8
    }
});

const FormInput = (props: Partial<TextInputProps>) => {
    return (
        <TextInput
            style={styles.root}
            {...props}
        />
    );
}

const TextInputIcon = TextInput.Icon;

export { TextInputIcon as FormInputIcon };
export default FormInput