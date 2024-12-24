//built in;
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";

//my components;
import ProfilePicture from "./ProfilePicture";
import { QuestBox } from "./Quests/QuestBox";
//styles;
import { ProfileStyle } from "../../styles/Pages/Profile/ProfilePage";
import { TopPart } from "../../styles/Pages/Profile/ProfilePage";
import { AchivmentPart } from "../../styles/Pages/Profile/ProfilePage";
import { DailyQuest } from "../../styles/Pages/Profile/ProfilePage";
//others;
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
        <ScrollView contentContainerStyle={{ height: 1000 }}>
          <View style={AchivmentPart.Container}></View>
          <View style={DailyQuest.Container}>
            <Text
              style={{
                position: "absolute",
                color: "white",
                fontSize: 16,
                fontWeight: "semibold",
                marginTop: 8,
              }}
            >
              Daily Quests
            </Text>
            <QuestBox
              name={"Create 3 pop song"}
              count={3}
              completedCount={2}
              Price={100}
            />
            <QuestBox
              name={"Create 8 rock song"}
              count={8}
              completedCount={5}
              Price={500}
            />
            <QuestBox
              name={"Listen 100 song"}
              count={100}
              completedCount={54}
              Price={2000}
            />
          </View>
          <View style={DailyQuest.Container}>
            <Text
              style={{
                position: "absolute",
                color: "white",
                fontSize: 16,
                fontWeight: "semibold",
                marginTop: 8,
              }}
            >
              Weekly Quests
            </Text>
            <QuestBox
              name={"Create 3 pop song"}
              count={3}
              completedCount={2}
              Price={100}
            />
            <QuestBox
              name={"Create 8 rock song"}
              count={8}
              completedCount={5}
              Price={500}
            />
            <QuestBox
              name={"Listen 100 song"}
              count={100}
              completedCount={54}
              Price={2000}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
