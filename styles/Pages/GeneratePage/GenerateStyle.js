import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  background_gradient: {
    width: "100%",
    height: "100%",
  },
  generate_container: {
    marginLeft: 16,
  },
  title_style: {
    marginBottom: 25,
    fontWeight: "900",
    color: "white",
    fontSize: 25,
  },
  text_color: {
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    paddingTop: 6,
    fontSize: 32,
  },
  input_field: {
    backgroundColor: "#262626",
    borderRadius: 12,
    padding: 10,
    paddingTop: 15,
    color: "white",
    width: "96.5%",
    height: 120,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    fontSize: 14,
  },
  generate_button: {
    zIndex: 1,
    backgroundColor: "#262626",
    width: "56%",
    height: 56,
    textAlign: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
});
