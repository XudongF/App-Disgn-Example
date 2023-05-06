import {StyleSheet, Image} from 'react-native';

export default function ImageViewer({placeholderImageSource, selectedImage}){
    const imageSource = selectedImage !== null
    ? {uri: selectedImage}
    : placeholderImageSource
    return (
        <Image source={imageSource} style={styles.image}></Image>
    )
}

const styles=StyleSheet.create({
    image:{
        height:400,
        aspectRatio:0.9,
        borderRadius:18,
    }
})


