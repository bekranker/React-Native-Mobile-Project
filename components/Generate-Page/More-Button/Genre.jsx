import { Text, TouchableOpacity } from "react-native";
import { AllStyle } from "../../../styles/Pages/GeneratePage/More-Section";

export function ChooseButton({ name }) {
  return (
    <TouchableOpacity style={AllStyle.genreButton}>
      <Text style={AllStyle.genreButtonText}>{name}</Text>
    </TouchableOpacity>
  );
}
