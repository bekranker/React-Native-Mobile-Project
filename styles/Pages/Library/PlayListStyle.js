import { StyleSheet } from "react-native";

//Constants
import { Colors } from "../../../components/CONSTANTS/constants";

export const PlayListStyle = StyleSheet.create({
  Container: {
    width: 398,
    height: 60,
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.ButtonBackground,
    borderRadius: 5,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  MultipleContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 70,
    alignItems: "center",
  },
  NamesContainer: {
    marginLeft: 7,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  CreatorText: {
    fontSize: 14,
    fontWeight: "regular",
    color: Colors.NormalText,
  },
  SongNameText: {
    fontSize: 14,
    fontWeight: "regular",
    color: Colors.NormalText,
  },
  CountText: {
    color: Colors.NormalText,
    fontSize: 12,
    fontWeight: "regular",
  },
  SongImage: {
    marginLeft: 4,
    width: 48,
    height: 48,
    borderRadius: 5,
  },
});
export const PlayListGenre = StyleSheet.create({
  Container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    marginLeft: 7,
  },
  Button: {
    backgroundColor: Colors.ButtonBackground,
    borderRadius: 20,
    width: 58,
    height: 36,
    justifyContent: "center",
    marginLeft: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  ButtonText: {
    color: Colors.ButtonText,
    textAlign: "center",
    fontSize: 12,
  },
});
export const PlayListPageStyle = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: 24,
  },
  HeadText: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "semibold",
    color: "white",
  },
  ScrollSide: {
    height: 560,
    width: "100%",
  },
});
