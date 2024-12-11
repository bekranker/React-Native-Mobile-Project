//build in;
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState, useContext } from "react";

//My components;

//Styles;
import { PlayListStyle } from "../../styles/Pages/Library/PlayListStyle";

//Others;
import pp from "../../Assets/pp.jpeg";
import ListenCountIcon from "../../Assets/ListenCountIcon.png";
import heart from "../../Assets/Listening Page/Heart.png";

export const PlayList = ({ dataOfItem }) => {
  const songPicture = pp; //as an url to img path;

  return (
    <>
      <TouchableOpacity style={PlayListStyle.Container}>
        <Image source={songPicture} style={PlayListStyle.SongImage}></Image>
        <View style={PlayListStyle.NamesContainer}>
          <Text style={PlayListStyle.SongNameText}>{dataOfItem.SongName}</Text>
          <Text style={PlayListStyle.CreatorText}>
            by {dataOfItem.CreatorName}
          </Text>
        </View>
        <View style={PlayListStyle.MultipleContainer}>
          <Image source={ListenCountIcon} />
          <Text style={PlayListStyle.CountText}>
            {dataOfItem.ListenCount} listen
          </Text>
        </View>
        <View style={PlayListStyle.MultipleContainer}>
          <TouchableOpacity>
            <Image source={heart}></Image>
          </TouchableOpacity>
          <Text style={PlayListStyle.CountText}>
            {dataOfItem.ListenCount} like
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
