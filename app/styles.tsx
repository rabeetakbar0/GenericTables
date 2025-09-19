import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  table:{
    margin:16,
    borderWidth:1,
    borderColor:'#ccc',
    backgroundColor:"white"
  },
  row:{
    flexDirection:'row',
  },
  cell:{
    flex:1,
    padding:8,
    borderWidth:1,
    borderColor:"#ccc",
    textAlign:"center",
  },
  header:{
backgroundColor:"#f2f2f2",
  },
  headerText:{
fontWeight:"bold",
  },
  
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
