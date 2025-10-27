import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from "@shopify/flash-list";

const DATA = [
    {
        title: "First Item",
        id: "1"
    },
    {
        title: "Second Item",
        id: "2"
    },
]

const MyList = () => {
    return (
        <FlashList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (<Text style={styles.list}>{item.title}</Text>)}

        />
    );
};


export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <MyList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 15,
        fontSize: 16,
    }
});
