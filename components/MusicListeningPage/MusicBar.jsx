//built in
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
//styles
import { CurrentListeningStyle } from "../../styles/Pages/Music/CurrentListening";
//others
import Tarkan from "../../Assets/pp.jpeg";
import Playbutton from "../../Assets/Listening Page/Playbutton.png";
import pause from "../../Assets/Listening Page/pause.png";
export const MusicPanel = ({ myContext }) => {
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
            source={vListening ? pause : Playbutton}
            style={CurrentListeningStyle.playIcon}
          ></Image>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};
