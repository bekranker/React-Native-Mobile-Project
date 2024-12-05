import { View, SafeAreaView, Text } from "react-native";

export const BlankPage = () => {
  return (
    <SafeAreaView>
      <View style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",

      }}>
        <Text style={
          {
            textAlign: "center",
            fontSize: 32, 
            fontWeight: "100",
            color: "white",
          }
          }>
            Coming Soon
          </Text>
      </View>
    </SafeAreaView>
  )
}
