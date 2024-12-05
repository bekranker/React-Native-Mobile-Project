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
import pause from "../../Assets/Listening Page/pause.png";
import { useContext } from "react";
export const MusicPanel = ({myContext}) => {

  const { vListening, vSetListening, vSetClose } = useContext(myContext);

  return (
    <>
      <TouchableOpacity
        style={CurrentListeningStyle.PanelContainer}
        onPress={() => {
          vSetClose(true);
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
            vSetListening(!vListening);
            console.log(`istening from Generate Page is: ${vListening}`);
          }}
        >
          <Image
            source={(vListening ? pause : Playbutton)}
            style={CurrentListeningStyle.playIcon}
          ></Image>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};

