import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
    return (
        <Tabs >
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}
