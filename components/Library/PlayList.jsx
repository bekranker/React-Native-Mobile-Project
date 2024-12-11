//build in
import { View, Text, TouchableOpacity, Image } from "react-native";

//My components

//Styles
import { PlayListStyle } from "../../styles/Pages/Library/PlayListStyle";

export const PlayList = ({ dataOfItem }) => {
  const songPicture = dataOfItem.SongPicture; //as an url to img path
  const songName = dataOfItem.SongName; //String
  const creatorName = dataOfItem.CreatorName; //String
  const likeCount = dataOfItem.LikeCount; //Int
  const listenCount = dataOfItem.ListenCount; //Int I think I need typescript... damn
  return (
    <>
      <TouchableOpacity style={PlayListStyle.Container}>
        <View style={PlayListStyle.NamesAndImageContainer}>
          <Image source={songPicture} style={PlayListStyle.SongImage}></Image>
          <View style={PlayListStyle.NamesContainer}>
            <Text style={PlayListStyle.CreatorText}>{songName}</Text>
            <Text style={PlayListStyle.CreatorText}>{creatorName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
