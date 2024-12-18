//build in components
import { Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
//other components
import { profilePicture } from "../CONSTANTS/constants";
import { ProfileWithCircle } from "./ProfileWithCircle";

//styles
import { ProfilePictureStyle } from "../../styles/Pages/Profile/ProfileButton";

const ProfilePicture = ({ style }) => {
  const [sliderHidden, setSliderHidden] = useState(false);
  return (
    <View style={style}>
      <TouchableOpacity style={ProfilePictureStyle.Container}>
        <Image
          source={profilePicture}
          style={ProfilePictureStyle.Photo}
        ></Image>
        {sliderHidden && <ProfileWithCircle></ProfileWithCircle>}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicture;
