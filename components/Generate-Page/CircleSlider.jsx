import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const CircleProgress = ({
  radius = 100,
  strokeWidth = 10,
  progress = 50, // Yüzdelik ilerleme (0-100)
  trackColor = "#ccc", // Arka plan rengi
  progressColor = "#4caf50", // İlerleme rengi
}) => {
  const angle = (progress / 100) * 360;

  const polarToCartesian = (cx, cy, r, angle) => {
    const a = ((angle - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
    };
  };

  const createArcPath = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const cx = radius + strokeWidth;
  const cy = radius + strokeWidth;

  return (
    <View style={styles.container}>
      <Svg
        width={(radius + strokeWidth) * 2}
        height={(radius + strokeWidth) * 2}
      >
        {/* Daire Arka Plan */}
        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* İlerleme Çizgisi */}
        <Path
          d={createArcPath(cx, cy, radius, 0, angle)}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </Svg>
      {/* <Text style={styles.text}>dasdasd</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Parent'a hizalama
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

export default CircleProgress;
