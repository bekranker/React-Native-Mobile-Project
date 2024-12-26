import { Text, TouchableOpacity } from "react-native";
import { AllStyle } from "../../../styles/Pages/GeneratePage/More-Section";

export function ChooseButton({ name, onClick }) {
  return (
    <TouchableOpacity
      style={AllStyle.genreButton}
      onPress={() => onClick(name)}
    >
      <Text style={AllStyle.genreButtonText}>{name}</Text>
    </TouchableOpacity>
  );
}
