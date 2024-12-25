//build in components;
import { Image, TouchableOpacity, View } from "react-native";
//other components;
import { ProfileWithCircle } from "./ProfileWithCircle";

//styles;
import { ProfilePictureStyle } from "../../styles/Pages/Profile/ProfileButton";

const ProfilePicture = ({ customStyle, hidden, radius, imageSource }) => {
  return (
    <View style={customStyle}>
      <TouchableOpacity style={ProfilePictureStyle.Container}>
        <Image source={imageSource} style={ProfilePictureStyle.Photo}></Image>
        {hidden && <ProfileWithCircle radius={radius}></ProfileWithCircle>}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicture;
