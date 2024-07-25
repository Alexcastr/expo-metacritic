import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/" className="text-white font-bold mb-8 text-2xl">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">About</Text>

      <Text className="text-white text-white/50 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        voluptates quos delectus qui soluta vero. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quibusdam voluptates quos delectus qui
        soluta vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quibusdam voluptates quos delectus qui soluta vero.
      </Text>
      <Text className="text-white text-white/50 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        voluptates quos delectus qui soluta vero. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quibusdam voluptates quos delectus qui
        soluta vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quibusdam voluptates quos delectus qui soluta vero.
      </Text>
      <Text className="text-white text-white/50 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        voluptates quos delectus qui soluta vero. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quibusdam voluptates quos delectus qui
        soluta vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quibusdam voluptates quos delectus qui soluta vero.
      </Text>
      <Text className="text-white text-white/50 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        voluptates quos delectus qui soluta vero. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quibusdam voluptates quos delectus qui
        soluta vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quibusdam voluptates quos delectus qui soluta vero.
      </Text>
    </ScrollView>
  );
}
