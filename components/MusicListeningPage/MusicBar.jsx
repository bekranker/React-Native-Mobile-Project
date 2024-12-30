//built in
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
//styles
import { CurrentListeningStyle } from "../../styles/Pages/Music/CurrentListening";
//others
import Playbutton from "../../Assets/ListeningPage/Playbutton.png";
import pause from "../../Assets/ListeningPage/pause.png";
export const MusicPanel = ({ myContext }) => {
  const { vListening, vSetListening, vSetClose, musicList } =
    useContext(myContext);

  return (
    <>
      <TouchableOpacity
        style={CurrentListeningStyle.PanelContainer}
        onPress={() => {
          vSetClose(true);
        }}
      >
        <Image
          source={musicList[musicList.length - 1].CoverImage}
          style={CurrentListeningStyle.pp}
        ></Image>
        <View style={CurrentListeningStyle.PanelItem}>
          <Text style={CurrentListeningStyle.songName}>
            {musicList[musicList.length - 1].Name}
          </Text>
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
