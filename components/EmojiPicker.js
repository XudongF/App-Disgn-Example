import {Modal, View, Text, Pressable, StyleSheet} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({isVisiable, children, onClose}) {
    return(
        <Modal animationType='slide' transparent={true} visible={isVisiable}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Choose a sticker
                    </Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name='class' color='#fff' size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles=StyleSheet.create({
    modalContent:{
        height:'20%',
        width:'100%',
        backgroundColor:'grey',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        bottom:0,
        position:"absolute",
    },
    titleContainer:{
        height:'20%',
        width:'100%',
        backgroundColor:'#464C55',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        color:'#fff',
        fontSize:16,
    },
    pickerContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
    },
})