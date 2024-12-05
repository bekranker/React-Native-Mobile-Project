//build in components
import { Image, TouchableOpacity } from "react-native";

//other components
import { profilePicture } from "../CONSTANTS/constants";

//styles
import { ProfilePictureStyle } from "../../styles/Pages/Profile/ProfileButton";


const ProfilePicture = props => {
  return (
    <TouchableOpacity style={ProfilePictureStyle.Container} onPress={()=>console.log("sa")}>
        <Image source={profilePicture} style={ProfilePictureStyle.Photo}></Image>
    </TouchableOpacity>
    
  )
}

export default ProfilePicture