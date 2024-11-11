import { StyleSheet } from "react-native";

export const NavBarStyle = StyleSheet.create({
  backgroundContainer: {
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    position: "absolute",
    backgroundColor: "#262626",
    width: "100%",
    height: 91,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 79,
    borderRadius: 10,
  },
  icon: {
    marginTop: 32,
    marginBottom: 31,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
