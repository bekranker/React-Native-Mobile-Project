//build in
import { View, Text, TouchableOpacity, Image } from "react-native";

//My components

//Styles
import PlayListStyle from "../../styles/Pages/Library/PlayList";

export const PlayList = ({ dataOfItem }) => {
  const songPicture = dataOfItem.SongPicture; //as a url to img path
  const songName = dataOfItem.SongName; //String
  const creatorName = dataOfItem.CreatorName; //String
  const likeCount = dataOfItem.LikeCount; //Int
  const listenCount = dataOfItem.ListenCount; //Int I think I need typescript... damn
  return (
    <>
      <TouchableOpacity style={PlayListStyle.Container}>
        <View style={PlayListStyle.MultipelContainer}>
          <Image
            source={songPicture}
            style={PlayListStyle.PlayListImage}
          ></Image>
          <View style={PlayListStyle.NamesContainer}>
            <Text style={PlayListStyle.CreatorText}>{songName}</Text>
            <Text style={PlayListStyle.CreatorText}>{creatorName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
