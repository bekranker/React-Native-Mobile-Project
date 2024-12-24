//built in;
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
//my components;
import { Colors } from "../../CONSTANTS/constants";

export const QuestBox = ({ name, count, completedCount, Price }) => {
  let progress = completedCount / count;
  return (
    <View style={QuestBoxStyle.Container}>
      <Text style={QuestBoxStyle.Texts}>{name}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 8,
        }}
      >
        <Text style={QuestBoxStyle.Texts}>
          {completedCount}/{count}
        </Text>
        <View>
          <Text
            style={{
              backgroundColor: "#262626",
              width: 50,
              height: 15,
              textAlign: "center",
              borderRadius: 10,
              color: "#ffffff",
              fontSize: 10,
            }}
          >
            {Price} XP
          </Text>
        </View>
      </View>
      <Progress.Bar
        progress={progress}
        width={378}
        height={8}
        color="#ffffff"
        unfilledColor="#262626"
        borderWidth={0}
        borderRadius={10}
        style={QuestBoxStyle.Slider}
      ></Progress.Bar>
    </View>
  );
};

const QuestBoxStyle = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
    backgroundColor: "#444444",
    width: 398,
    height: 64,
    borderRadius: 7,
    paddingLeft: 10,
    paddingTop: 3,
  },
  Texts: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "regular",
  },
  Slider: {},
});
