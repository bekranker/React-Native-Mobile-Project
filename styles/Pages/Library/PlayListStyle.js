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
  },

  MultipleContainer: { display: "flex" },
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
  ListenCountText: {},
  LikeButton: {},
  SongImage: {
    marginLeft: 4,
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  ListenImage: {},
});
