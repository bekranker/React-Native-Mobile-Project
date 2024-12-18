//build in components
import { Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
//other components
import { ProfileWithCircle } from "./ProfileWithCircle";

//styles
import { ProfilePictureStyle } from "../../styles/Pages/Profile/ProfileButton";

const ProfilePicture = ({ style, hidden, radius, imageSource }) => {
  return (
    <View style={style}>
      <TouchableOpacity style={ProfilePictureStyle.Container}>
        <Image source={imageSource} style={ProfilePictureStyle.Photo}></Image>
        {hidden && <ProfileWithCircle radius={radius}></ProfileWithCircle>}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicture;
