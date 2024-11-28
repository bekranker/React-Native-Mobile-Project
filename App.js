import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { useState, useContext, createContext } from "react";
/* This Field is for Components */
import GeneratePage from "./components/Generate-Page/Generate";
import NavigationBar from "./components/NavigationBar";
import { MusicPanel } from "./components/MusicListeningPage/MusicBar";
import { Listen } from "./components/MusicListeningPage/Listen";
/* This Field is for Stylies */
import { Style } from "./styles/Pages/GeneratePage/GenerateStyle";
/* This Field is for Extra Libraries */
import { LinearGradient } from "expo-linear-gradient";


const myContext = createContext();
export default function App() {
  
  const [close, setClose] = useState(false);
  const [listening, setListening] = useState(false);

  return (
    <>
    <myContext.Provider value={{vClose: close, vSetClose: setClose, vListening: listening, vSetListening: setListening}}>
      <Listen myContext={myContext}/>
    </myContext.Provider>
      
      <LinearGradient
        colors={["#1A1A1A", "#0B0B0B"]}
        style={Style.background_gradient}
      >
        <MusicPanel setCloseHook={setClose} setListening={setListening} listening={listening}></MusicPanel>
        <SafeAreaView>
          <GeneratePage></GeneratePage>
        </SafeAreaView>
        <NavigationBar></NavigationBar>
      </LinearGradient>
    </>
  );
}
