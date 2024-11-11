import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";

import { ListenStyle } from "../../styles/Pages/Music/BigCurrentListening";
import musicLabelBg from "../../styles/pp.jpeg";

export const Listen = () => {
  return (
    <>
      <Image
        source={musicLabelBg}
        style={ListenStyle.BackgrounCoverImage}
      ></Image>
      <View style={ListenStyle.Container}></View>
    </>
  );
};
