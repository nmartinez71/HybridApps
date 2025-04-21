import React from "react";
import { View, Image, ActivityIndicator } from "react-native";

const HeaderImage = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <View style={{ width: "100%", height: 200, justifyContent: "center", alignItems: "center" }}>
      {loading && <ActivityIndicator size="large" color="#ccc" />}
      <Image
        source={require("../assets/f113658776.jpg")}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "cover",
          position: "absolute",
        }}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

export default HeaderImage;
