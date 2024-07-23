import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type CustomTextInputProps = {
  label: string;
  required?: boolean;
  placeholder: string;
  secureTextEntry?: boolean;
};

const CustomTextInput = ({
  label,
  placeholder,
  secureTextEntry,
}: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>
            {label}
            <Text style={styles.required}>*</Text>
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#CCCCCC"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  inputContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 3,
  },
  labelContainer: {
    position: 'absolute',
    top: -10,
    left: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
  },
  label: {
    color: '#4F4F4F',
    fontSize: 17,
    fontWeight: '500',
  },
  required: {
    color: '#FF0000',
  },
  input: {
    fontSize: 16,
    color: '#000000',
    paddingTop: 8,
  },
});

export default CustomTextInput;
