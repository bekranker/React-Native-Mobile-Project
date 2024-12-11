//build in Components;
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState, createContext } from "react";

//my Components;
import { Category } from "../CONSTANTS/constants";
import { PlayListButton } from "./PlayListButton";
import { PlayList } from "./PlayList";
import { PlayListPage } from "./PlayListPage";
//styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";

//others;
import pp from "../../Assets/pp.jpeg";
import LikedSongJSONData from "../../Datas/LibraryMP3Files/CreatedSongs/LikedSongsData.json";
import CreatedSongJSONData from "../../Datas/LibraryMP3Files/CreatedSongs/LikedSongsData.json";

const context = createContext();

export const LibraryPage = () => {
  const [category, setCategory] = useState();
  const [CategoryOpen, setCategoryOpen] = useState(false);
  const [playListType, setPlayListType] = useState();
  const DataOfLikedSongs = [{ ...LikedSongJSONData, SongPicture: pp }];
  const DataOfCreatedSongs = [{ ...CreatedSongJSONData, SongPicture: pp }];
  const datasCreatedSongs = [
    {
      pp: pp,
      name: "Created Song Play List Name",
      Data: [
        DataOfCreatedSongs,
        DataOfCreatedSongs,
        DataOfCreatedSongs,
        DataOfCreatedSongs,
        DataOfCreatedSongs,
        DataOfCreatedSongs,
        DataOfCreatedSongs,
      ],
    },
  ];
  const datasLikedSongs = [
    {
      pp: pp,
      name: "Liked Song Play List name",
      Data: [
        DataOfLikedSongs,
        DataOfLikedSongs,
        DataOfLikedSongs,
        DataOfLikedSongs,
        DataOfLikedSongs,
        DataOfLikedSongs,
      ],
    },
  ];
  return (
    <>
      {!CategoryOpen && (
        <context.Provider
          value={{
            category: category,
            setCategory: setCategory,
            CategoryOpen: CategoryOpen,
            setCategoryOpen: setCategoryOpen,
            playListType: playListType,
            setPlayListType: setPlayListType,
          }}
        >
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
                <Text style={LibraryStyle.SongTypeButtonText}>
                  Created Songs
                </Text>
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
                    <PlayListButton
                      context={context}
                      pp={item.pp}
                      name={item.name}
                      data={item.Data}
                    />
                  )}
                />
              )}
              {category === Category.LIKED_SONGS && (
                <FlatList
                  data={datasLikedSongs}
                  keyExtractor={(_, index) => index}
                  renderItem={({ item }) => (
                    <PlayListButton
                      pp={item.pp}
                      name={item.name}
                      data={item.Data}
                    />
                  )}
                />
              )}
            </View>
          </View>
          {CategoryOpen && (
            <PlayListPage context={context} data={playListType}></PlayListPage>
          )}
        </context.Provider>
      )}
    </>
  );
};
