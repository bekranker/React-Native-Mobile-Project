
//build in Components;
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useState } from "react";

//my Components;
import { Category } from "../CONSTANTS/constants";
import { PlayList } from "./PlayList";


//styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";

export const LibraryPage = ()=>{

  const [category, setCategory] = useState();

  return (
      <View style={LibraryStyle.Container}>
        <Text style={LibraryStyle.HeadText}>
            Library
        </Text>
        <View style={LibraryStyle.SongTypeContainer}>
          {/* Created Song Button */}
          <TouchableOpacity 
          style={LibraryStyle.SongTypeButton} 
          onPress={
            ()=>{setCategory(Category.CREATED_SONGS);}}>
            <Text style={LibraryStyle.SongTypeButtonText}>Created Songs</Text>
          </TouchableOpacity>
          {/* Liked Song Button */}
          <TouchableOpacity 
            style={LibraryStyle.SongTypeButton}
            onPress={()=>{setCategory(Category.LIKED_SONGS);}}>
            <Text style={LibraryStyle.SongTypeButtonText}>Liked Songs</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={LibraryStyle.ScrollList}>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
          <PlayList SelectedCategory={category}></PlayList>
        </ScrollView>
      </View>
  )
}