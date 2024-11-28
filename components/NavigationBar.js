import { View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import { NavBarStyle } from "../styles/Pages/Music/MusicPanel";
import GenerateIcon from "../Assets/Navigation Bar/Generate_Icon.png";
import HomeIcon from "../Assets/Navigation Bar//Home_Icon.png";
import LibraryIcon from "../Assets/Navigation Bar//Library_Icon.png";
import SearchIcon from "../Assets/Navigation Bar//Search_Icon.png";

import Pressed_Gen from "../Assets/Navigation Bar/Pressed_Generate_Icon.png";
import Pressed_Home from "../Assets/Navigation Bar/Pressed_Home_Icon.png";
import Pressed_Lib from "../Assets/Navigation Bar/Pressed_Library_Icon.png";
import Pressed_Search from "../Assets/Navigation Bar/Pressed_Search_Icon.png";




export default function NavigationBar() {
  const [icons, setIcons] = useState({
    Home: HomeIcon,
    Library: LibraryIcon,
    Search: SearchIcon,
    Generate: Pressed_Gen,
  });
  
  return (
    <View style={NavBarStyle.backgroundContainer}>
      <TouchableOpacity onPress={()=>{
        setIcons(icons.Home === HomeIcon ? {Home: Pressed_Home} : {Home: HomeIcon});}}>
        <Image
          source={icons.Home}
          style={[NavBarStyle.icon, { marginLeft: 40 }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        setIcons(icons.Search === SearchIcon ? {Search: Pressed_Search} : {Search: SearchIcon});}}>
        <Image source={icons.Search} style={NavBarStyle.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        setIcons(icons.Generate === GenerateIcon ? {Generate: Pressed_Gen} : {Generate: GenerateIcon});}}>
        <Image source={icons.Generate} style={[NavBarStyle.icon]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        setIcons(icons.Library === LibraryIcon ? {Library: Pressed_Lib} : {Library: LibraryIcon});}}>
        <Image
          source={icons.Library}
          style={[NavBarStyle.icon, { marginRight: 32 }]}
        />
      </TouchableOpacity>
    </View>
  );
}
