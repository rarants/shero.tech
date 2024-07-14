import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, far, fas)

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: { 
            borderTopColor: '#D4D4D4',
            borderTopWidth: 1
          },
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarItemStyle: { 
              borderRightColor: '#D4D4D4',
              borderRightWidth: 1
            },
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#E06FA9",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon icon="house" color={focused ? '#FFD7EB' : '#D4D4D4'} />
            ),
          }}
        />
        {/* Aulas/Conteúdo */}
        <Tabs.Screen
          name="class"
          options={{
            title: 'Aulas',
            tabBarItemStyle: { 
              borderRightColor: '#D4D4D4',
              borderRightWidth: 1
            },
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#E06FA9",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon icon="graduation-cap" color={focused ? '#FFD7EB' : '#D4D4D4'} />
            )
          }}
        />
        {/* Ranking */}
        <Tabs.Screen
          name="ranking"
          options={{
            title: 'Ranking',
            tabBarItemStyle: { 
              borderRightColor: '#D4D4D4',
              borderRightWidth: 1
            },
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#E06FA9",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon icon="medal" color={focused ? '#FFD7EB' : '#D4D4D4'} />
            ),
          }}
        />
        {/* Usuário */}
        <Tabs.Screen
          name="user"
          options={{
            title: 'Usuário',
            tabBarItemStyle: { 
              borderRightColor: '#D4D4D4',
              borderRightWidth: 1
            },
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#E06FA9",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesomeIcon icon="user" color={focused ? '#FFD7EB' : '#D4D4D4'} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
