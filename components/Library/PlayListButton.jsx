//build in Components;
import { View, Text, TouchableOpacity, Image } from "react-native";

//my Components;
import { ParseJsonToSongData } from "../DataParser";

//Styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";
import { useState } from "react";

//Temporary assets;

export const PlayListButton = ({ name, pp, data }) => {
  return (
    <>
      <TouchableOpacity style={LibraryStyle.PlayListContainer}>
        <Image source={pp} style={LibraryStyle.PlayListImage}></Image>
        <Text style={LibraryStyle.PlayListText}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};
