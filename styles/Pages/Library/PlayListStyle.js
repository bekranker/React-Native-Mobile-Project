import { StyleSheet } from "react-native";

export const PlayListStyle = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    display: "flex",
    columnGap: 24,
    marginLeft: 16,
    gap: 24,
  },

  MultipelContainer: { display: "flex" },
  NamesContainer: {
    display: "flex",
    flexDirection: "column",
  },
  CreatorText: {},
  SongNameText: {},
  ListenCountText: {},
  LikeButton: {},
  SongImage: {
    width: 64,
    height: 64,
  },
});
