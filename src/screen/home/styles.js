import { StyleSheet, Dimensions } from "react-native";

export const largura_tela = Dimensions.get('window').width;
export const altura_tela = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:  'white',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 28,
    color: 'black',
    margin: 25,
  },
  viewGroup: {
    flex: 1
  },
  viewButton: {
    width: largura_tela,
    height: 70,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    width: 220,
    height: 40,
    backgroundColor: '#0401B0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    margin: 7,
    shadowColor: '#0401B0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
  },
  plus: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 28,
    color: 'white',
    marginRight: 10,
  },
  textButton: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: 'white',
  }
});

export default styles;