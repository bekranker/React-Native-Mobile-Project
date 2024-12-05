
//build in Components
import { View, Text, TouchableOpacity, Image } from "react-native";

//my Components
import { ParseJsonToSongData } from "../DataParser";

//Styles
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";
import { useState } from "react";

//Temporary assets
import pp from "../../Assets/pp.jpeg";

export const PlayList = () => {

  const data = ParseJsonToSongData();
  return (
    <>
      <TouchableOpacity style={LibraryStyle.PlayListContainer}>
        <Image source={pp} style={LibraryStyle.PlayListImage}></Image>
        <Text style={LibraryStyle.PlayListText}>{data.name}</Text>
      </TouchableOpacity>
    </>
  );
}
