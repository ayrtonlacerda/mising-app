import { StyleSheet, Dimensions } from "react-native";

export const largura_tela = Dimensions.get('window').width;
export const altura_tela = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: largura_tela,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 6,
  },
  number: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.35)'
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: 'black',
    width: 180,
  },
  viewButton: {
    width: 80,
    height: 35,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: 'white',
  }
});

export default styles;
