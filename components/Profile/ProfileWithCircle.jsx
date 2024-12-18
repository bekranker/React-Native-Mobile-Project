import { Image, TouchableOpacity, Text, Animated } from "react-native";
import { Emitter } from "react-native-particles";

//my components
import CircleSlider from "../Generate-Page/CircleSlider";

export const ProfileWithCircle = () => {
  return (
    <>
      <CircleSlider
        radius={20}
        strokeWidth={3}
        progress={75} // %75 ilerleme
        trackColor="#d3d3d3"
        progressColor="#2196f3"
      />
    </>
  );
};
