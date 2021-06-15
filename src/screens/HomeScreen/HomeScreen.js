// libraries
import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// services
// import beachesService from '../../services/Beaches/beachesService';

// mocks
import beachesMocks from '../../assets/mocks/latest.json';

function HomeScreen() {
    const { height, width } = Dimensions.get('window');

    // states
    const [beachesList, setBeachesList] = useState(beachesMocks || []);

    // effects
    useEffect(() => {
        // call method here

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.mapContainer(width, height)}
                minZoomLevel={7} // 7
                maxZoomLevel={12} //16
                mapType='standard'

                initialRegion={{
                    latitude: -27.5936579,
                    longitude: -48.5683587,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                }}
                camera={{
                    latitude: -27.5936579,
                    longitude: -48.5683587,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                }}
            >
                {beachesList.map((beach) => {
                    const pinColor = beach.ANALISES[0].CONDICAO === 'PRÓPRIO' ? '#0073ff' : '#e33636'

                    return (
                        <Marker
                            key={beach.CODIGO}
                            title={beach.BALNEARIO}
                            description={beach.PONTO_NOME}
                            pinColor={pinColor}
                            coordinate={{ latitude: Number(beach.LATITUDE), longitude: Number(beach.LONGITUDE) }}
                        />
                    )
                })}
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: (width, height) => ({
        width: width,
        height: height,
    }),
});

export default HomeScreen;
