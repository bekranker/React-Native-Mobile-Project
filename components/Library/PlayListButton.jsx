//build in Components;
import { View, Text, TouchableOpacity, Image } from "react-native";

//my Components;
import { PlayList } from "./PlayList";
//Styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";
import { useState } from "react";

//Temporary assets;

export const PlayListButton = ({ name, pp, data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={LibraryStyle.PlayListContainer}
        onPress={() => setOpen(true)}
      >
        <Image source={pp} style={LibraryStyle.PlayListImage}></Image>
        <Text style={LibraryStyle.PlayListText}>{name}</Text>
      </TouchableOpacity>
      {open && <PlayList dataOfItem={data}></PlayList>}
    </>
  );
};
