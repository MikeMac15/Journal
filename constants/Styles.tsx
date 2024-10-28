import NewEntryButton from "@/components/UI/homePage/NewEntryButton";
import { StyleSheet } from "react-native";
export const gradient = ["#c7bc9f","#e3b134"]

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d2c7b4',
        height:'100%',
    },
    newEntryButton:{
        flexDirection:'row',
        backgroundColor:"#e0d5c4",
        width:'100%',
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        borderTopColor:'rgba(200,200,200,0.5)',
        borderLeftColor:'rgba(200,200,200,0.5)',
        borderBottomColor:'rgba(150,150,150,0.5)',
        borderRightColor:'rgba(150,150,150,0.5)',
    },
    signOutButton: {
      alignSelf: "flex-end",
    },
    seperator:{
        height:1,
        backgroundColor:'#aaa',
        margin:10
    }
  });
export const extraStyles = StyleSheet.create({
    shadow:{
        shadowOffset:{width:4,height:4},
        shadowColor:'#111',
        shadowRadius:3,
        shadowOpacity:0.3,
        elevation: 5,
    },
  });



export const textStyles = StyleSheet.create({
    h1:{
        fontSize: 30,
        
    },
    h2: {
        fontSize:24,
        
    },
    h3:{
        fontSize:20,
        
    },
    h4: {
        fontSize: 18,
        
    }
})
  
export const recentsPage = StyleSheet.create({
    title: {
        fontSize:20,
    },
    box: {
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        width:60,
        height:70,
        borderWidth:2,
        borderRadius:10,
        borderColor:'whitesmoke'
    },
    row: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    full: {
        flexDirection:'column',

    },
    emptyBox:{
        backgroundColor:"#e0d5c4",
        width:'100%',
        height:'100%',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    }
    
});