//build in Components;
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  ScrollView,
} from "react-native";
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
  const [filter, setFilter] = useState("");
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
            horizontal={true}
            data={GENRES}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={PlayListGenre.Button}
                onPress={() => {
                  setFilter(item);
                  console.log(item);
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
            data={data.filter((item, index) => item.Genre !== filter)}
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
