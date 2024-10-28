import { extraStyles, styles, textStyles } from '@/constants/Styles';
import { Entypo } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface NewEntryButtonProps {

}

const NewEntryButton: React.FC<NewEntryButtonProps> = ({ }) => {
    return (
        <TouchableOpacity style={[styles.newEntryButton, extraStyles.shadow]} activeOpacity={0.7}>
            <Entypo name="new-message" size={24} color="black" />
            <Text style={[textStyles.h3,{marginHorizontal:15}]}>Write New Entry</Text>
        </TouchableOpacity>
    )
}

export default NewEntryButton;
