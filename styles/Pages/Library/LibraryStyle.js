import { StyleSheet } from "react-native";

export const LibraryStyle = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    display: "flex",
    columnGap: 24,
    marginLeft: 16,
  },
  HeadText: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "semibold",
    color: "white"
  },
  SongTypeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginTop: 24,
  },
  SongTypeButton:{
    height: 32,
    paddingHorizontal: 16,
    backgroundColor: "#444444",
    justifyContent :"center",
    borderRadius: 30,
  },
  SongTypeButtonText:{
    width: "100%",
    height: "inherit",
    color: "white",
    fontSize: 12,
    fontWeight: "regular",
    textAlign: "center",
  }
});