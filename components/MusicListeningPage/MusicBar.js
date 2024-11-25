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
import Tarkan from "../../Assets/pp.jpeg";
import Playbutton from "../../Assets/Listening Page/Playbutton.png";
import pause from "../../Assets/Listening Page/pause.jpg";
import { useState } from "react";

export const MusicPanel = ({ setCloseHook }) => {
  const [buttonImage, setButtonImage] = useState(Playbutton);

  return (
    <>
      <TouchableOpacity
        style={CurrentListeningStyle.PanelContainer}
        onPress={() => {
          setCloseHook(true);
        }}
      >
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
      </TouchableOpacity>
    </>
  );
};
export const OpenMusicPanel = () => {
  return <>{}</>;
};
