import {View, Image} from 'react-native';

export default function EmojiSticker({imageSize, stickerSource}){
    return (
        <View style={{top:-250, left:50}}>
            <Image source={stickerSource} resizeMode='contain' style={{width: imageSize, height:imageSize}}>
            </Image>
        </View>
    )
}