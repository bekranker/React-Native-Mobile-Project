import 
{
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  Animated,
} from "react-native";
import Slider from "@react-native-community/slider";
import React, { useRef, useEffect, useState } from "react";
import {
  ListenStyle,
  Bottom_Upper_Side,
  Bottom_Bottom_Side,
  UpperSide,
} from "../../styles/Pages/Music/BigCurrentListening";
import { LinearGradient } from "expo-linear-gradient";
import musicLabelBg from "../../Assets/Listening Page/Backgrounds/popBG.jpeg";
import AlbumPP from "../../Assets/pp.jpeg";
import hearth from "../../Assets/Listening Page/Heart.png";
import previousButton from "../../Assets/Listening Page/Previous.png";
import nextButton from "../../Assets/Listening Page/Next.png";
import PlayButton from "../../Assets/Listening Page/playBlack.png";
import stopButton from "../../Assets/Listening Page/pauseBlack.png";
import closeButton from "../../Assets/closeWhite.png";
export const Listen = ({ closeHook, closeHookVariable }) => {
  //zoom animation
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [paused, setPaused] = useState(false);
  //it's true when pressed closing button

  //zoom animation with useEffect hook. It's maded with that hook because of optimization.
  useEffect(() => {
    const startZoomAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.1,
            duration: 7000,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 7000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startZoomAnimation();
  }, [scaleAnim, !closeHook]);

  return (
    closeHookVariable && (
      <>
        {/* the background conatin bottom and upper elements like exit arrow and music time slider's parents */}
        <Animated.Image
          source={musicLabelBg}
          style={[
            ListenStyle.BackgrounCoverImage,
            { transform: [{ scale: scaleAnim }] },
          ]}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]} // Set gradient colors
          style={ListenStyle.gradient}
        >
          <SafeAreaView>
            <View style={ListenStyle.Container}>
              {/* Upper element */}
              <View style={ListenStyle.UpperAndBottomElements}>
                {/* This is the Arrow element which is using for resizing  */}
                <View style={UpperSide.ArrowButton}>
                  <TouchableOpacity
                    style={UpperSide.button}
                    onPress={() => {
                      closeHook(false);
                    }}
                  >
                    <Image
                      source={closeButton}
                      style={UpperSide.CloseImage}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Bottom element */}
              <View
                style={[
                  ListenStyle.UpperAndBottomElements,
                  { justifyContent: "flex-end" },
                ]}
              >
                {/* first element of bottom's. its including; 
                
                  1-) profile,
                  2-) settings,
                  3-) music name,
                  4-) music pp,
                  5-) creater
                  6-) ❤️ button

                */}
                <View style={[Bottom_Upper_Side.Container]}>
                  {/* This part is the left part where is the name, creator and pp included */}
                  <View style={Bottom_Upper_Side.LeftEpisode}>
                    <Image
                      source={musicLabelBg}
                      style={Bottom_Upper_Side.LeftEpisodePP}
                    />
                    <View style={Bottom_Upper_Side.leftEpisodeTexts}>
                      <Text style={Bottom_Upper_Side.LeftEpisodeHeader}>
                        Big Log-2006 Remastered
                      </Text>
                      <Text style={Bottom_Upper_Side.LeftEpisodeCreater}>
                        by bekranker
                      </Text>
                    </View>
                  </View>
                  {/* This part is the right part where is the pp, settings and ❤️ included */}
                  <View style={Bottom_Upper_Side.RightEpisode}>
                    <Image
                      source={AlbumPP}
                      style={Bottom_Upper_Side.RightEpisodePP}
                    />
                    <Text style={{ fontSize: 15, color: "white" }}>1.2Mn</Text>
                    <TouchableOpacity
                      style={Bottom_Upper_Side.RightEpisodeSettingsButton}
                    >
                      <Text
                        style={Bottom_Upper_Side.RightEpisodeSettingsButtonText}
                      >
                        •••
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={hearth}
                        style={Bottom_Upper_Side.RightEpisodeLikeButton}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* second element of bottom's. its including; 
          
                  1-) slider of the music's time,
                  2-) previous button,
                  3-) next button,
                  4-) play & stop button,

                */}
                <View style={Bottom_Bottom_Side.Container}>
                  <View
                    style={Bottom_Bottom_Side.Bottom_Bottom_Side_FirstElements}
                  >
                    <Slider
                      maximumValue={3}
                      minimumValue={0}
                      maximumTrackTintColor="#656565"
                      style={Bottom_Bottom_Side.Slider}
                    ></Slider>
                  </View>
                  <View
                    style={Bottom_Bottom_Side.Bottom_Bottom_Side_SecondElements}
                  >
                    <TouchableOpacity>
                      <Image
                        source={previousButton}
                        style={Bottom_Bottom_Side.Next_Previous_Button}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={Bottom_Bottom_Side.Play_Pause_Button}
                      onPress={() => {
                        setPaused(!paused);
                      }}
                    >
                      <Image
                        source={paused ? stopButton : PlayButton}
                        style={Bottom_Bottom_Side.Play_Pause_Button_Icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={nextButton}
                        style={Bottom_Bottom_Side.Next_Previous_Button}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </>
    )
  );
};
