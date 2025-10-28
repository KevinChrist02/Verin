import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#31572c',
                headerStyle: {
                    backgroundColor: '#ffffff',
                },
                headerShadowVisible: false,
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />
                }}
            />
        </Tabs>
    );
}

