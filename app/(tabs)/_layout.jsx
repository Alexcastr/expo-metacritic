import { Tabs } from "expo-router";


import { HomeIcon, InfoIcon } from "../../components/Icons";


export default function TabsLayout( ) {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white/50",
      tabBarStyle: {
        backgroundColor: "#111827",
        borderTopWidth: 0,
        elevation: 0,
      },
    }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: "Home",
          tabBarIcon: ({color})=> <HomeIcon color={color}/>,
        }}
      />
      <Tabs.Screen 
        name="about" 
        options={{
          title: "About",
          tabBarIcon: ({color})=> <InfoIcon color={color}/>,
        }}
      />

    </Tabs>
  );
}
