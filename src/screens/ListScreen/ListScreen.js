// libraries
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function ListScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>List Screen!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ListScreen;
