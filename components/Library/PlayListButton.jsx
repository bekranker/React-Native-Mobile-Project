//build in Components;
import { View, Text, TouchableOpacity, Image } from "react-native";

//my Components;
import { PlayList } from "./PlayList";
//Styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";
import { useState, useContext } from "react";

//Temporary assets;

export const PlayListButton = ({ name, pp, context, data }) => {
  const {
    category,
    setCategory,
    CategoryOpen,
    setCategoryOpen,
    playListType,
    setPlayListType,
  } = useContext(context);
  return (
    <>
      <TouchableOpacity
        style={LibraryStyle.PlayListContainer}
        onPress={() => {
          setCategoryOpen(true);
          setPlayListType(data);
          console.log(data);
        }}
      >
        <Image source={pp} style={LibraryStyle.PlayListImage}></Image>
        <Text style={LibraryStyle.PlayListText}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};
