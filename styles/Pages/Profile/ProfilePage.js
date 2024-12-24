import { StyleSheet } from "react-native";

import { Colors } from "../../../components/CONSTANTS/constants";

export const ProfileStyle = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
  },
  Top: {},
});
export const TopPart = StyleSheet.create({
  Statues: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  BackButton: { width: 50, height: 30 },
  BackButtonImage: {
    marginLeft: 10,
    width: 30,
    height: 17,
    transform: [{ rotate: "90deg" }],
  },
  ProfileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 36,
  },
  ProfileNamesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  ProfilePhoto: {
    marginTop: 25,
    marginLeft: 33,
    width: 102,
    height: 102,
  },
  ProfileName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  ProfileDesc: {
    color: "white",
    fontSize: 18,
    fontWeight: "regular",
  },
  StatuesTitleFollowing: {
    fontSize: 12,
    color: "white",
    fontWeight: "semibold",
  },
  StatuesXPText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  StatuesFollowing: {
    color: "white",
    fontSize: 16,
    fontWeight: "semibold",
  },
  StatuesFollower: {
    color: "white",
    fontSize: 16,
    fontWeight: "semibold",
  },
});

export const AchivmentPart = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.ButtonBackground,
    width: 414,
    height: 108,
    borderRadius: 10,
    marginTop: 49,
  },
});
export const DailyQuest = StyleSheet.create({
  Container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: 36,
    gap: 16,
    backgroundColor: Colors.ButtonBackground,
    width: 414,
    height: 265,
    borderRadius: 10,
    marginTop: 16,
  },
});
export const WeeklyQuest = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.ButtonBackground,
    width: 414,
    height: 265,
    borderRadius: 10,
    marginTop: 16,
  },
});
