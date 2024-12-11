//build in;
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState, useContext } from "react";

//My components;

//Styles;
import { PlayListStyle } from "../../styles/Pages/Library/PlayListStyle";

//Others;
import pp from "../../Assets/pp.jpeg";
import ListenCountIcon from "../../Assets/ListenCountIcon.png";

export const PlayList = ({ dataOfItem, context }) => {
  const songPicture = pp; //as an url to img path;
  const songName = dataOfItem.SongName; //String;
  const creatorName = dataOfItem.CreatorName; //String;
  const likeCount = dataOfItem.LikeCount; //Int;
  const listenCount = dataOfItem.ListenCount; //Int I think I need typescript... damn;

  return (
    <>
      <TouchableOpacity style={PlayListStyle.Container}>
        <Image source={songPicture} style={PlayListStyle.SongImage}></Image>
        <View style={PlayListStyle.NamesAndImageContainer}>
          <View style={PlayListStyle.NamesContainer}>
            <Text style={PlayListStyle.SongNameText}>
              {dataOfItem.SongName}
            </Text>
            <Text style={PlayListStyle.CreatorText}>
              by {dataOfItem.CreatorName}
            </Text>
          </View>
        </View>
        <View style={PlayListStyle.MultipleContainer}>
          <Image src={ListenCountIcon} />
        </View>
      </TouchableOpacity>
    </>
  );
};
