import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import { AllStyle } from "../../../styles/Pages/GeneratePage/More-Section";
import React, { useRef } from "react";
import { ChooseButton } from "./Genre";

//genres
const genres = [
  "Metal",
  "Rock",
  "Jazz",
  "Blues",
  "Lo-fi",
  "Japanese",
  "Pop",
  "Classical",
  "Hip-Hop",
  "Country",
  "EDM",
  "Soul",
  "Folk",
  "Reggae",
];

//instruments
const instruments = [
  "drum",
  "guitar",
  "electro guitar",
  "piano",
  "saxaphone",
  "trumpet",
  "violin",
];

export const PanelOpen = () => {
  slideUpAndFadeIn();
};

let slideUpAndFadeIn = () => {
  Animated.parallel([
    Animated.timing(slideAnim, {
      toValue: 0, // Başlangıç pozisyonuna geri dön
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(opacityAnim, {
      toValue: 1, // Opaklığı 1'e çıkar
      duration: 500,
      useNativeDriver: true,
    }),
  ]).start();
};
export default function MoreButton() {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  slideUpAndFadeIn = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0, // Başlangıç pozisyonuna geri dön
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1, // Opaklığı 1'e çıkar
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const slideDownAndFade = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 700, // 100 piksel aşağı kaydır
        duration: 500, // 500 ms süresince animasyon
        easing: Easing.out(Easing.ease), // ease-out efekti
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0, // Opaklığı 0.3'e düşür
        duration: 280,
        useNativeDriver: true,
      }),
    ]).start();
  };
  // Parent View'i yukarı çıkarıp opaklığı artıran fonksiyon

  const half = Math.ceil(genres.length / 2);
  const halfIns = Math.ceil(genres.length / 2);

  const firstRowGenres = genres.slice(0, half);
  const secondRowGenres = genres.slice(half);
  const firstRowInstruments = instruments.slice(0, halfIns);
  const secondRowInstruments = instruments.slice(halfIns);

  return (
    <Animated.View
      style={[
        AllStyle.container,
        {
          transform: [{ translateY: slideAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      {/* First flex row including Genre Title and Back Button */}
      <View style={AllStyle.items}>
        <Text style={AllStyle.itemsHeaders}>Genre</Text>
        <TouchableOpacity
          style={AllStyle.backButton}
          onPress={() => {
            slideDownAndFade();
          }}
        ></TouchableOpacity>
      </View>
      {/* Second flex row including Genres as ScrollView */}
      <View style={AllStyle.itemsGenreScrolls}>
        <ScrollView style={AllStyle.genreItemsParent} horizontal={true}>
          <View style={{ flexDirection: "column" }}>
            {/* İlk Satır */}
            <View style={AllStyle.genreButtonParent}>
              {firstRowGenres.map((name, index) => (
                <ChooseButton key={`first-${index}`} name={name} />
              ))}
            </View>

            {/* İkinci Satır */}
            <View style={AllStyle.genreButtonParent}>
              {secondRowGenres.map((name, index) => (
                <ChooseButton key={`second-${index}`} name={name} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      {/* Third flex row including Instruments as ScrollView */}
      <View style={AllStyle.itemsGenreScrolls}>
        <Text style={[AllStyle.itemsHeaders, { paddingLeft: 6 }]}>
          Instruments{" "}
          <Text style={{ fontSize: 12, fontWeight: "700", color: "#B7B7B7" }}>
            (optional)
          </Text>
        </Text>
        <ScrollView style={AllStyle.genreItemsParent} horizontal={true}>
          <View style={{ flexDirection: "column" }}>
            {/* İlk Satır */}
            <View style={AllStyle.genreButtonParent}>
              {firstRowInstruments.map((name, index) => (
                <ChooseButton key={`first-${index}`} name={name} />
              ))}
            </View>

            {/* İkinci Satır */}
            <View style={AllStyle.genreButtonParent}>
              {secondRowInstruments.map((name, index) => (
                <ChooseButton key={`second-${index}`} name={name} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      {/* Last flex row will include private public toogle */}
      <View style={AllStyle.items}></View>
    </Animated.View>
  );
}
