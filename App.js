import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

/* This Field is for Components */
import GeneratePage from "./components/Generate-Page/Generate";
import NavigationBar from "./components/NavigationBar";
import { MusicPanel } from "./styles/Pages/MusicListeningPage/MusicBar";
/* This Field is for Stylies */
import { Style } from "./styles/Pages/GeneratePage/GenerateStyle";

/* This Field is for Extra Libraries */
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#1A1A1A", "#0B0B0B"]}
      style={Style.background_gradient}
    >
      <NavigationBar></NavigationBar>
      <MusicPanel></MusicPanel>
      <SafeAreaView>
        <GeneratePage></GeneratePage>
      </SafeAreaView>
    </LinearGradient>
  );
}
