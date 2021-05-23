import  React ,{ useState }  from 'react';
import { View, StyleSheet, Button,Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const { width, height } = Dimensions.get('window')

export default function Video_live() {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
//   const [videourl, setvideourl] = useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')
  const [videourl, setvideourl] = useState('http://gamliel.tobedev.com/api/medias/01_offre_unique_fr-2018.mp4')
  return (
    <View style={styles.container}>
      <Video
        // ref={video}
        style={styles.video}
        source={{
        //   uri: 'http://gamliel.tobedev.com/api/medias/00_intro_cabi-2018.mp4',
          uri: videourl,
        }}
        useNativeControls
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    width: width,
    height: height ,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
