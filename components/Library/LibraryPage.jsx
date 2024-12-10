//build in Components;
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";

//my Components;
import { Category } from "../CONSTANTS/constants";
import { PlayListButton } from "./PlayListButton";
import { PlayList } from "./PlayList";
//styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";

//others;
import pp from "../../Assets/pp.jpeg";

export const LibraryPage = () => {
  const [category, setCategory] = useState(Category.DEBUG);
  const datasCreatedSongs = [
    {
      pp: pp,
      name: "Created Song Play List Name",
      Data: {
        SongPicture: pp,
        SongName: "Song Name",
        CreatorName: "Bekranker",
        LikeCount: 0,
        ListenCount: 0,
      },
    },
  ];
  const datasLikedSongs = [
    {
      pp: pp,
      name: "Liked Song Play List name",
      Data: {
        SongPicture: pp,
        SongName: "Song Name",
        CreatorName: "Bekranker",
        LikeCount: 0,
        ListenCount: 0,
      },
    },
  ];
  return (
    <View style={LibraryStyle.Container}>
      <Text style={LibraryStyle.HeadText}>Library</Text>
      <View style={LibraryStyle.SongTypeContainer}>
        {/* Created Song Button */}
        <TouchableOpacity
          style={LibraryStyle.SongTypeButton}
          onPress={() => {
            setCategory(Category.CREATED_SONGS);
          }}
        >
          <Text style={LibraryStyle.SongTypeButtonText}>Created Songs</Text>
        </TouchableOpacity>
        {/* Liked Song Button */}
        <TouchableOpacity
          style={LibraryStyle.SongTypeButton}
          onPress={() => {
            setCategory(Category.LIKED_SONGS);
          }}
        >
          <Text style={LibraryStyle.SongTypeButtonText}>Liked Songs</Text>
        </TouchableOpacity>
      </View>
      <View style={LibraryStyle.ScrollSide}>
        {category === Category.CREATED_SONGS && (
          <FlatList
            data={datasCreatedSongs}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
              <PlayListButton pp={item.pp} name={item.name} data={item.Data} />
            )}
          />
        )}
        {category === Category.LIKED_SONGS && (
          <FlatList
            data={datasLikedSongs}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
              <PlayListButton pp={item.pp} name={item.name} data={item.Data} />
            )}
          />
        )}
      </View>
    </View>
  );
};
