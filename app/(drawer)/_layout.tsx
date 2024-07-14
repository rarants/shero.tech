import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
import ClassScreen from '@/app/(tabs)/class';
import HomeScreen from '@/app/(tabs)/class';
import RankingScreen from '@/app/(tabs)/ranking';
import ComunityScreen from './comunity';
import OpportunitiesScreen from './opportunities';
import UserScreen from '@/app/(tabs)/user';



library.add(fab, far, fas)

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  return (
		<GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer.Navigator screenOptions={{
            headerStyle: {
            height: 80,
            backgroundColor: '#E06FA9',
            },
            headerTintColor: '#FFFFFF'
        }}
        >
        <Drawer.Screen
            name="home"
            options={{
            drawerLabel: 'Home',
            title: '', 
            drawerInactiveTintColor: '#E06FA9',
            drawerActiveTintColor: '#FFFFFF',
            drawerActiveBackgroundColor: '#E06FA9'
            }}
            component={HomeScreen}
        />
        <Drawer.Screen
            name="class"
            options={{
            drawerLabel: 'Cursos',
            title: '', 
            drawerInactiveTintColor: '#E06FA9',
            drawerActiveTintColor: '#FFFFFF',
            drawerActiveBackgroundColor: '#E06FA9'
            }}
            component={ClassScreen}
        />
        <Drawer.Screen
            name="ranking"
            options={{
            drawerLabel: 'Ranking',
            title: '',
            drawerInactiveTintColor: '#E06FA9',
            drawerActiveTintColor: '#FFFFFF',
            drawerActiveBackgroundColor: '#E06FA9'
            }}
            component={RankingScreen}
        />
        <Drawer.Screen
            name="comunity"
            options={{
            drawerLabel: 'Comunidade',
            title: '',
            drawerInactiveTintColor: '#E06FA9',
            drawerActiveTintColor: '#FFFFFF',
            drawerActiveBackgroundColor: '#E06FA9'
            }}
            component={ComunityScreen}
        />
        <Drawer.Screen
            name="opportunities"
            options={{
            drawerLabel: 'Oportunidades',
            title: '',
            drawerInactiveTintColor: '#E06FA9',
            drawerActiveTintColor: '#FFFFFF',
            drawerActiveBackgroundColor: '#E06FA9'
            }}
            component={OpportunitiesScreen}
        />
        <Drawer.Screen
            name="user"
            options={{
            drawerLabel: 'Perfil',
            title: '',
            drawerInactiveTintColor: '#E06FA9', 
            drawerActiveTintColor: '#FFFFFF',
            drawerActiveBackgroundColor: '#E06FA9'
            }}
            component={UserScreen}
        />
        </Drawer.Navigator>
    </GestureHandlerRootView>
	);
}
