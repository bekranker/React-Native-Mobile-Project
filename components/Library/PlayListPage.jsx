//build in Components
import { View, TouchableOpacity, FlatList } from "react-native";
import { useState, useContext } from "react";

//my Components

//my Styles
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";

//Others

export const PlayListPage = ({ context, data }) => {
  const {
    category,
    setCategory,
    CategoryOpen,
    setCategoryOpen,
    playListType,
    setPlayListType,
  } = useContext(context);

  const flatData = data;
  return (
    <>
      <View style={LibraryStyle.Container}>
        <Text style={LibraryStyle.HeadText}>{category}</Text>
        <FlatList
          data={flatData}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => (
            <PlayListButton pp={item.pp} name={item.name} data={item.Data} />
          )}
        />
      </View>
    </>
  );
};
