//built in;
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

//my components;
import ProfilePicture from "./ProfilePicture";
//styles;
import { ProfileStyle } from "../../styles/Pages/Profile/ProfilePage";
import { TopPart } from "../../styles/Pages/Profile/ProfilePage";
import { AchivmentPart } from "../../styles/Pages/Profile/ProfilePage";
//others
import closeButton from "../../Assets/closeWhite.png";
import pp from "../../Assets/pp.png";
import kalemIcon from "../../Assets/pen.png";
export const Profile = () => {
  const [circleHidden, setCircleHidden] = useState(true);
  return (
    <>
      <View style={ProfileStyle.Container}>
        <View style={ProfileStyle.Top}>
          <TouchableOpacity style={TopPart.BackButton}>
            <Image style={TopPart.BackButtonImage} source={closeButton}></Image>
          </TouchableOpacity>
          <View style={TopPart.ProfileContainer}>
            <ProfilePicture
              style={TopPart.ProfilePhoto}
              hidden={true}
              radius={51}
              imageSource={pp}
            ></ProfilePicture>
            <View style={TopPart.ProfileNamesContainer}>
              <Text style={TopPart.ProfileName}>Bekranker</Text>
              <View style={{ width: 175, height: 50 }}>
                <Text style={TopPart.ProfileDesc}>
                  this is description this is description
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Image source={kalemIcon}></Image>
            </TouchableOpacity>
          </View>
          <View style={TopPart.Statues}>
            <View>
              <Text style={TopPart.StatuesXPText}>3500 / 5000 XP</Text>
            </View>
            <View>
              <Text style={TopPart.StatuesFollowing}>461</Text>
              <Text style={TopPart.StatuesTitleFollowing}>Following</Text>
            </View>
            <View>
              <Text style={TopPart.StatuesFollower}>461</Text>
              <Text style={TopPart.StatuesTitleFollowing}>Follower</Text>
            </View>
          </View>
        </View>
        <View style={AchivmentPart.Container}></View>
      </View>
    </>
  );
};
