import { StyleSheet } from "react-native";

export const LibraryStyle = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    display: "flex",
    columnGap: 24,
    marginLeft: 16,
    gap: 24,
  },
  HeadText: {
    marginTop: 24,
    textAlign: "left",
    fontSize: 25,
    fontWeight: "semibold",
    color: "white"
  },
  SongTypeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
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
  },
  ScrollList:{
    display: "flex",
    flexDirection: "column",
    columnGap: 16,
  },
  PlayListContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  PlayListImage:{
    width: 64,
    height: 64,
    borderRadius: 10
  },
  PlayListText:{
    textAlign: "right",
    color: "white",
    fontSize: 14,
    fontWeight: "regular",
  }
});