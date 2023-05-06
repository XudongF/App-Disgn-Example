import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const PlaceholderImage = require('./assets/helicopter.jpeg');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("you did not selec any image.")
    }
  };
  const onReset=()=>{
    setShowAppOptions(false);
  };
  const onAddSticker = () =>{
    setIsModalVisible(true);
  };
  const onMoalClose=()=>{
    setIsModalVisible(false);
  };
  const onSaveImageAsync=async ()=>{
    // will implement later
  };

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
      <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}></ImageViewer>
      {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji}></EmojiSticker> : null}
      </View>
      {showAppOptions ? (
      <View style={styles.optionContainers}>
        <View style={styles.optionsRow}>
          <IconButton icon={'refresh'} label={'Reset'} onPress={onReset}></IconButton>
          <CircleButton onPress={onAddSticker} />
          <IconButton icon={'save-alt'} label={'Save'} onPress={onSaveImageAsync}></IconButton>
        </View>
      </View>
      ) : (
        <View style={styles.footerContainer}>
        <Button label={'Choose a photo'} theme={"primary"} onPress={pickImageAsync}></Button>
        <Button label={"Use this photo"} onPress={()=>setShowAppOptions(true)}></Button>
        </View>)}

        <EmojiPicker isVisiable={isModalVisible} onClose={onMoalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onMoalClose}></EmojiList>
          
        </EmojiPicker>

      <StatusBar style="light" />
      </View>
      )
    }



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer:{
    flex:1,
    paddingTop:45,

  },

  footerContainer:{
    flex:1/3,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:100,
  },

  optionContainers:{
    position:'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems:'center',
    flexDirection:'row',
  },
})
