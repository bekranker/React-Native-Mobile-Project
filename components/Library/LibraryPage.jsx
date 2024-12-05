
//build in Components;
import { View, Text, TouchableOpacity } from "react-native";

//my Components;

//styles;
import { LibraryStyle } from "../../styles/Pages/Library/LibraryStyle";

export const LibraryPage = ()=>{
  return (
      <View style={LibraryStyle.Container}>
        <Text style={LibraryStyle.HeadText}>
            Library
        </Text>
        <View style={LibraryStyle.SongTypeContainer}>
          <TouchableOpacity style={LibraryStyle.SongTypeButton}>
            <Text style={LibraryStyle.SongTypeButtonText}>Created Songs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={LibraryStyle.SongTypeButton}>
            <Text style={LibraryStyle.SongTypeButtonText}>Liked Songs</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}