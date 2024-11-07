import { View, TouchableOpacity, Image } from "react-native";

import { NavBarStyle } from "../styles/MusicPanel";
import GenerateIcon from "../styles/Navigation_Bar_Icons/Generate_Icon.png";
import HomeIcon from "../styles/Navigation_Bar_Icons/Home_Icon.png";
import LibraryIcon from "../styles/Navigation_Bar_Icons/Library_Icon.png";
import SearchIcon from "../styles/Navigation_Bar_Icons/Search_Icon.png";

export default function NavigationBar() {
  return (
    <View style={NavBarStyle.backgroundContainer}>
      <TouchableOpacity>
        <Image
          source={HomeIcon}
          style={[NavBarStyle.icon, { marginLeft: 40 }]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={SearchIcon} style={NavBarStyle.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={GenerateIcon} style={[NavBarStyle.icon]} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={LibraryIcon}
          style={[NavBarStyle.icon, { marginRight: 32 }]}
        />
      </TouchableOpacity>
    </View>
  );
}
