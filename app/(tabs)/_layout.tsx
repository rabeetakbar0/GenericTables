import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
         tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}


// import { Stack } from "expo-router";
// import React from "react";

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: true,       // show header (back button lives here)
//         gestureEnabled: true,    // enable swipe back on iOS
//         presentation: "card",    // iOS-style card navigation
//       }}
//     >
//       <Stack.Screen
//         name="index"
//         options={{ title: "Home" }}
//       />
//       <Stack.Screen
//         name="explore"
//         options={{ title: "Explore" }}
//       />
//     </Stack>
//   );
// }

