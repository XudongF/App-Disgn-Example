import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable} from "react-native";
import { View } from "react-native-web";

export default function EmojiList({onSelect, onCloseModal}){
    const [emoji] = useState([
        require('../assets/Emojis/Blender.png'),
        require('../assets/Emojis/Autismus.png'),
        require('../assets/Emojis/Like.png'),
        require('../assets/Emojis/Mhh.png'),
        require('../assets/Emojis/Oh.png'),
        require('../assets/Emojis/R.png'),
    ]);
    return(
        <FlatList horizontal showsHorizontalScrollIndicator={Platform.OS === 'web' ? true:false} data={emoji} contentContainerStyle={styles.listContainer} renderItem={({item, index})=>{
            return (
                <Pressable onPress={()=>{
                    onSelect(item);
                    onCloseModal();
                }}>
                <Image source={item} style={styles.image}></Image>

                </Pressable>
            )
        }}>
        </FlatList>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    image: {
        width:100,
        height:100,
        marginRight:20,
    },
})