//build in Components;
import { View, TouchableOpacity, FlatList, Text, Image } from "react-native";
import { useState, useContext } from "react";

//my Components;
import { PlayList } from "./PlayList";
import { GENRES } from "../CONSTANTS/constants";

//my Styles;
import {
  PlayListPageStyle,
  PlayListGenre,
} from "../../styles/Pages/Library/PlayListStyle";

//Others;
import backIcon from "../../Assets/closeWhite.png";

export const PlayListPage = ({ context, data }) => {
  const { category, CategoryOpen, setCategoryOpen } = useContext(context);
  const [filter, setFilter] = useState("Rock");
  return (
    <>
      {/* Headers */}
      <View style={PlayListPageStyle.Container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
            gap: 15,
            marginLeft: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => setCategoryOpen(false)}
            style={{ width: 15, height: 15 }}
          >
            <Image
              source={backIcon}
              style={[
                { width: 15, height: 15, transform: [{ rotate: "90deg" }] },
              ]}
            />
          </TouchableOpacity>
          <Text style={PlayListPageStyle.HeadText}>{category}</Text>
        </View>
        {/* Genres */}
        <View style={PlayListGenre.Container}>
          <FlatList
            contentContainerStyle={{ height: 45, alignItems: "center" }}
            horizontal={true}
            data={GENRES}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={PlayListGenre.Button}
                onPress={() => {
                  setFilter(item);
                  console.log(data);
                }}
              >
                <Text style={PlayListGenre.ButtonText}>{item}</Text>
              </TouchableOpacity>
            )}
          ></FlatList>
        </View>
        {/* Musics */}

        <View style={PlayListPageStyle.ScrollSide}>
          <FlatList
            contentContainerStyle={{
              width: "100%",
              alignItems: "center",
              marginTop: 5,
            }}
            data={data.filter((item) => item.Genre === filter)}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
              <PlayList dataOfItem={item} context={context} />
            )}
          />
        </View>
      </View>
    </>
  );
};
