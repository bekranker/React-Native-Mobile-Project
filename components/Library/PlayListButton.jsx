//build in Components;
import { Text, TouchableOpacity, Image } from "react-native";

//my Components;

//Styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";
import { useContext } from "react";

//Temporary assets;

export const PlayListButton = ({ name, pp, context, data }) => {
  const { setCategoryOpen, setPlayListType } = useContext(context);
  return (
    <>
      <TouchableOpacity
        style={LibraryStyle.PlayListContainer}
        onPress={() => {
          setCategoryOpen(true);
          setPlayListType(data);
        }}
      >
        <Image source={pp} style={LibraryStyle.PlayListImage}></Image>
        <Text style={LibraryStyle.PlayListText}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};
