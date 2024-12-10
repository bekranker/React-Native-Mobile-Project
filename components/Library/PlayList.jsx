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
  const listenCount = dataOfItem.listenCount; //Int I think I need typescript... damn
  return (
    <>
      <TouchableOpacity style={PlayListStyle.Container}>
        <Image source={songPicture} style={PlayListStyle.PlayListImage}></Image>
        <Text style={PlayListStyle.PlayListText}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};
