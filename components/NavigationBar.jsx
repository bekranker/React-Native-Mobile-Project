import { View, TouchableOpacity, Image } from "react-native";
import { useContext, useState } from "react";

import { NavBarStyle } from "../styles/Pages/Music/MusicPanel";
import GenerateIcon from "../Assets/Navigation Bar/Generate_Icon.png";
import HomeIcon from "../Assets/Navigation Bar//Home_Icon.png";
import LibraryIcon from "../Assets/Navigation Bar//Library_Icon.png";
import SearchIcon from "../Assets/Navigation Bar//Search_Icon.png";

import Pressed_Gen from "../Assets/Navigation Bar/Pressed_Generate_Icon.png";
import Pressed_Home from "../Assets/Navigation Bar/Pressed_Home_Icon.png";
import Pressed_Lib from "../Assets/Navigation Bar/Pressed_Library_Icon.png";
import Pressed_Search from "../Assets/Navigation Bar/Pressed_Search_Icon.png";




export default function NavigationBar({myContext}) {
  const [icons, setIcons] = useState({
    Home: HomeIcon,
    Library: LibraryIcon,
    Search: SearchIcon,
    Generate: Pressed_Gen,
  });
  const {layer, setLayer} = useContext(myContext); 
  return (
    <View style={NavBarStyle.backgroundContainer}>
      <TouchableOpacity onPress={()=>{
        setIcons({
          Home: Pressed_Home,
          Library: LibraryIcon,
          Search: SearchIcon,
          Generate: GenerateIcon
          });
          setLayer("Home");
        }}>
        <Image
          source={icons.Home}
          style={[NavBarStyle.icon, { marginLeft: 40 }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        setIcons({
          Home: HomeIcon,
          Library: LibraryIcon,
          Search: Pressed_Search,
          Generate: GenerateIcon
          });
          setLayer("Explore");
        }}>
        <Image source={icons.Search} style={NavBarStyle.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        setIcons({
          Home: HomeIcon,
          Library: LibraryIcon,
          Search: SearchIcon,
          Generate: Pressed_Gen
          }); 
          setLayer("Generate");

        }}>
        <Image source={icons.Generate} style={[NavBarStyle.icon]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        setIcons({
          Home: HomeIcon,
          Library: Pressed_Lib,
          Search: SearchIcon,
          Generate: GenerateIcon
          }); 
          setLayer("Library");

        }}>
        <Image
          source={icons.Library}
          style={[NavBarStyle.icon, { marginRight: 32 }]}
        />
      </TouchableOpacity>
    </View>
  );
}
