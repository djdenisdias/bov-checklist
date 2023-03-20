
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from "@react-native-community/netinfo";

export default function Status({}){

	const [status, setStatus] = useState(false);

	NetInfo.fetch().then(state => {
		setStatus(state.isConnected);
	});

	return <Icon
		style={styles.status}
		name="record"
		size={30}
		color={status ? "#00FF00" : "#ff0000"}
	/>
}

const styles = StyleSheet.create({
	status: {
		position: "absolute",
		right: 30,
		top: 38,
		zIndex: 999999
	}
});
