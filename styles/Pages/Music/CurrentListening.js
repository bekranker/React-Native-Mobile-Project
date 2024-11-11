import { StyleSheet } from "react-native";

export const CurrentListeningStyle = StyleSheet.create({
  PanelContainer: {
    backgroundColor: "#444444",
    flexDirection: "row",
    alignItems: "center",
    width: 422,
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 90,
    position: "absolute",
    marginRight: 0,
    marginLeft: 2,
    gap: 12,
  },
  PanelItem: {
    MarginLeft: 12,
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    alignSelf: "center",
    gap: 4,
  },
  songName: {
    fontSize: 14,
    color: "#ffffff",
  },
  songBy: {
    fontSize: 12,
    color: "#ffffff",
  },
  playIcon: {
    marginLeft: 238,
    marginRight: 16,
    width: 20,
    height: 20,
  },
  playButton: {
    width: 20,
    height: 20,
  },
  pp: {
    width: 48,
    height: 48,
    marginLeft: 4,
    borderRadius: 8,
  },
});
