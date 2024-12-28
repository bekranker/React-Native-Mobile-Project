import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Style } from "../../styles/Pages/GeneratePage/GenerateStyle";
import MoreButton, { PanelOpen } from "./More-Button/More";
import { useState, createContext } from "react";
import axios from "axios";
import { OPENAI_API_KEY } from "@env";
import OpenAI from "openai";

export default function GeneratePage() {
  const context = createContext();
  const [CreatingProfile, setCreatingProfile] = useState(false);
  const [inputField, setInputField] = useState("");
  const api = OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey: api });

  const completion = async () => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: "Write a haiku about recursion in programming.",
          },
        ],
      });
      console.log(response.data); // Log the response or handle it as needed
    } catch (error) {
      console.error("An error occurred:", error.message);
      // Optionally handle specific error cases here
    }
  };

  return (
    <>
      <View style={Style.generate_container}>
        <Text style={[Style.title_style, { marginTop: 96 }]}>
          Generate Music
        </Text>
        <Text style={[Style.title_style, { marginTop: 0 }]}>Describe</Text>
        <View>
          <TextInput
            placeholder="describe your music..."
            style={Style.input_field}
            placeholderTextColor="#ccc"
            multiline
            numberOfLines={20}
            textAlignVertical="top"
          >
            {inputField}
          </TextInput>
          {/* Its the Suprise Me button */}
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 345, // Adjust closer to the TextInput edge
              top: 90, // Adjust this to roughly center it vertically
              width: 63, // Smaller width
              height: 25, // Smaller height
              backgroundColor: "#444444",
              borderRadius: 15,
              justifyContent: "center", // Center text
              alignItems: "center",
            }}
            onPress={() => {
              completion();
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 10,
                fontWeight: 400,
                textAlign: "center",
                flexWrap: "nowrap",
              }}
            >
              Suprise me
            </Text>
          </TouchableOpacity>
          {/* Its the Plus (+) button */}
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 315, // Adjust closer to the TextInput edge
              top: 90, // Adjust this to roughly center it vertically
              width: 25, // Smaller width
              height: 25, // Smaller height
              backgroundColor: "#444444",
              borderRadius: 15,
            }}
            onPress={() => console.log("Button Pressed")}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
          {/* Its the More button */}
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 350,
              top: 90,
              width: 45,
              height: 25,
              backgroundColor: "#444444",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => PanelOpen()}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 11,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 56,
          alignItems: "center",
          borderRadius: 10,
          marginBottom: 10,
          marginTop: 28,
          textAlign: "center",
        }}
      >
        {/* Its the Generate button */}
        <TouchableOpacity style={Style.generate_button}>
          <Text
            style={[Style.text_color, { paddingLeft: 48, paddingRight: 48 }]}
          >
            Generate
          </Text>
        </TouchableOpacity>
        <context.Provider
          value={{ inputField: inputField, setInputField: setInputField }}
        >
          <MoreButton key={""} context={context} />
        </context.Provider>
      </View>
    </>
  );
}
