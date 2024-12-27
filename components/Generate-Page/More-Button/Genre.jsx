import { Text, TouchableOpacity } from "react-native";
import { AllStyle } from "../../../styles/Pages/GeneratePage/More-Section";
import { useContext } from "react";

export function Genre({ name, context }) {
  const { inputField, setInputField } = useContext(context);

  return (
    <TouchableOpacity
      style={AllStyle.genreButton}
      onPress={() => {
        setInputField(inputField + " " + name);
      }}
    >
      <Text style={AllStyle.genreButtonText}>{name}</Text>
    </TouchableOpacity>
  );
}
