import { StyleSheet } from "react-native";

export const ListenStyle = StyleSheet.create({
  BackgrounCoverImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  linearColor: {
    position: "absolute",
  },
  Container: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  UpperAndBottomElements: {
    width: "100%",
    height: "50%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-start",
  },
  gradient: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    zIndex: 2,
    width: "100%",
    height: "100%",
  },
});
export const Bottom_Upper_Side = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "25%",
    width: "100%",
    gap: 30,
  },
  LeftEpisode: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  LeftEpisodePP: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  leftEpisodeTexts: {
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  LeftEpisodeHeader: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  LeftEpisodeCreater: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },

  RightEpisode: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    gap: 30,
    marginBottom: 90,
  },
  RightEpisodePP: {
    width: 48,
    height: 48,
    borderRadius: 60,
  },
  RightEpisodeSettingsButton: {
    textAlign: "center",
  },
  RightEpisodeSettingsButtonText: {
    color: "white",
    fontSize: 20,
  },
  RightEpisodeLikeButton: {
    width: 20,
    height: 20,
  },
});
export const Bottom_Bottom_Side = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    height: "25%",
    width: "100%",
  },
  Bottom_Bottom_Side_FirstElements: {},
  Bottom_Bottom_Side_SecondElements: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 62,
    alignItems: "center",
  },
  Next_Previous_Button: { width: 20, height: 20 },
  Play_Pause_Button_Icon: {
    width: 17,
    height: 20,
  },
  Play_Pause_Button: {
    justifyContent: "center",
    alignItems: "center",
    width: 54,
    height: 54,
    backgroundColor: "white",
    borderRadius: 40,
  },

  Slider: { width: 400 },
});
export const UpperSide = StyleSheet.create({
  ArrowButton: {
    width: 430,
    height: "50%",
  },
  button: { marginLeft: 30 },
  CloseImage: {
    width: 20,
    height: 13,
  },
});
