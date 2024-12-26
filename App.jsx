import { SafeAreaView } from "react-native";
import { useState, createContext } from "react";
/* This Field is for Components */
import { BlankPage } from "./components/blankPage";
import GeneratePage from "./components/Generate-Page/Generate";
import NavigationBar from "./components/NavigationBar";
import { MusicPanel } from "./components/MusicListeningPage/MusicBar";
import { Listen } from "./components/MusicListeningPage/Listen";
import ProfilePicture from "./components/Profile/ProfilePicture";
import { LibraryPage } from "./components/Library/LibraryPage";
import { ProfileWithCircle } from "./components/Profile/ProfileWithCircle";
/* This Field is for Stylies */
import { Style } from "./styles/Pages/GeneratePage/GenerateStyle";
import { ProfilePictureStyle } from "./styles/Pages/Profile/ProfileButton";

/* This Field is for Extra Libraries */
import { LinearGradient } from "expo-linear-gradient";
import { Profile } from "./components/Profile/Profile";
import pp from "./Assets/pp.jpeg";

const myContext = createContext();
export default function App() {
  const [close, setClose] = useState(false);
  const [listening, setListening] = useState(false);
  const [layer, setLayer] = useState("Profile");
  const openProfilePage = () => {
    setLayer("Profile");
  };
  return (
    <>
      <myContext.Provider
        value={{
          vClose: close,
          vSetClose: setClose,
          vListening: listening,
          vSetListening: setListening,
          layer: layer,
          setLayer: setLayer,
        }}
      >
        <Listen myContext={myContext} />

        <LinearGradient
          colors={["#1A1A1A", "#0B0B0B"]}
          style={Style.background_gradient}
        >
          <SafeAreaView>
            {layer === "Profile" && <Profile></Profile>}
            {layer === "Generate" && <GeneratePage></GeneratePage>}
            {layer === "Library" && <LibraryPage></LibraryPage>}
            {layer === "Home" && <BlankPage></BlankPage>}
            {layer === "Explore" && <BlankPage></BlankPage>}
            {layer !== "Profile" && (
              <ProfilePicture
                hidden={false}
                radius={10}
                imageSource={pp}
                customStyle={ProfilePictureStyle.View}
                clickFunction={() => {
                  openProfilePage();
                }}
              />
            )}
          </SafeAreaView>
          <MusicPanel myContext={myContext}></MusicPanel>
          <NavigationBar myContext={myContext}></NavigationBar>
        </LinearGradient>
      </myContext.Provider>
    </>
  );
}
