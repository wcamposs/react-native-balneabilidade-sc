// libraries
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// components 
import BeachItem from '../../components/BeachItem';

// mocks
import beachesMocks from '../../assets/mocks/latest.json';

function ListScreen() {

    // states
    const [beachesList, setBeachesList] = useState(beachesMocks || []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Pontos de Balneabilidade</Text>
                </View>

                <ScrollView style={styles.beachListContainer}>
                    {beachesList.map((beach) => {
                        return (
                            <BeachItem
                                beach={beach}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    contentContainer: {
        margin: 12,
    },
    titleContainer: {
        marginTop: 8,
        marginBottom: 16,
    },
    title: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    beachListContainer: {
        marginBottom: 44,
    },
});

export default ListScreen;
