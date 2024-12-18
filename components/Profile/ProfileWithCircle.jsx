import { Image, TouchableOpacity, Text, Animated } from "react-native";
import { Emitter } from "react-native-particles";

//my components
import CircleSlider from "../Generate-Page/CircleSlider";

export const ProfileWithCircle = ({ radius }) => {
  return (
    <>
      <CircleSlider
        radius={radius}
        strokeWidth={4}
        progress={75} // %75 ilerleme
        trackColor="gray"
        progressColor="#ffffff"
      />
    </>
  );
};
