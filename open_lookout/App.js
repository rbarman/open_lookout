import { StyleSheet, Text, PermissionsAndroid} from 'react-native';
import {useEffect} from 'react';
import { useCameraDevices, Camera} from 'react-native-vision-camera';

// AndroidManifest.xml has android.permission.CAMERA permission so don't need to call below permission request right now.
// credit: https://github.com/mrousavy/react-native-vision-camera/issues/1133#issuecomment-1186484342 
const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Sample Photo App Camera Permission",
          message:
          "Sample Photo App needs access to your camera " +
          "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };


export default function App() {
  
  console.log("App Started");

  // useEffect(() => {
  //   requestCameraPermission();
  // }, []);
  

  const devices = useCameraDevices()
  const device = devices.back

  if (device == null){ return <Text>Loading</Text>}
  else{
    return (
      <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}>
      </Camera>
    )
  }
}