import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MapView, {Marker} from 'react-native-maps';

export default function MapsScreen() {

	const tokyoRegion = {
 longitude: 10.13523,
		      latitude: 36.80724,
		      latitudeDelta: 0.09,
		      longitudeDelta: 0.09,
};

    return (
        <MapView region={tokyoRegion} style={{ flex: 1 }} >
		<Marker coordinate={tokyoRegion} />
	</MapView>
    )
}

const styles = StyleSheet.create({})
