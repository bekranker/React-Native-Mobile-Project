import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { CurrentListeningStyle } from "../../styles/Pages/Music/CurrentListening";
import Tarkan from "../../styles/pp.jpeg";
import Playbutton from "../../styles/Playbutton.png";
import pause from "../../styles/pause.jpg";
import { Listen } from "./Listen";
import { useState } from "react";

export const MusicPanel = () => {
  const [buttonImage, setButtonImage] = useState(Playbutton);

  return (
    <>
      <View style={CurrentListeningStyle.PanelContainer}>
        <Image source={Tarkan} style={CurrentListeningStyle.pp}></Image>
        <View style={CurrentListeningStyle.PanelItem}>
          <Text style={CurrentListeningStyle.songName}>Love Song</Text>
          <Text style={CurrentListeningStyle.songBy}>by Bekir</Text>
        </View>
        <TouchableOpacity
          style={CurrentListeningStyle.playButton}
          onPress={() => {
            setButtonImage(() => {
              return buttonImage === pause ? Playbutton : pause;
            });
          }}
        >
          <Image
            source={buttonImage}
            style={CurrentListeningStyle.playIcon}
          ></Image>
        </TouchableOpacity>
      </View>
    </>
  );
};
export const OpenMusicPanel = () => {
  return <>{}</>;
};
