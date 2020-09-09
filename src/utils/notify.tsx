import { Platform, ToastAndroid, Alert } from 'react-native';

// Make Quick Alert by platform
export default function notify(msg: string) {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.LONG)
    } else {
        // AlertIOS.alert(msg);
        Alert.alert(
            '',
            msg,
            [
                { text: "باشه", onPress: () => { } }
            ],
            { cancelable: true }
        );
    }
}