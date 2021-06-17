// libraries
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

function BeachItem(props) {
    const { beach } = props;

    const flagColor = beach.ANALISES[0].CONDICAO === 'PRÓPRIO' ? '#0073ff' : '#e33636';

    function renderBeachDescription() {
        return (
            <View style={styles.beachDescriptionContainer}>
                <Text style={styles.beachDescriptionTitle}>{`${beach.BALNEARIO} - ${beach.PONTO_NOME}`}</Text>
                <Text style={styles.beachAddress}>{beach.LOCALIZACAO}</Text>
                <Text style={styles.beachStatus}>{`Última medição: ${beach.ANALISES[0].DATA}`}</Text>
            </View>
        );
    }


    return (
        <>
            <Divider />
            <TouchableOpacity
                style={styles.beachItem}
                onPress={() => { }}
            >
                <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name="flag" size={28} color={flagColor} style={styles.icon} />
                        </View>
                        {renderBeachDescription()}
                    </View>
                </View>
            </TouchableOpacity>
            <Divider />
        </>
    );
}

const styles = StyleSheet.create({
    beachItem: {
        marginVertical: 8,
    },
    container: {
        // flex: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    iconContainer: {
        margin: 8,
    },
    icon: {
        marginRight: 12,
        marginTop: 8,
    },
    beachDescriptionContainer: {

    },
    beachDescriptionTitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    beachAddress: {
        fontSize: 14,
    },
    beachStatus: {
        fontSize: 12,
        fontStyle: 'italic',
    },
});

export default BeachItem;
