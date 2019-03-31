import { StyleSheet, Dimensions } from "react-native";

export const largura_tela = Dimensions.get('window').width;
export const altura_tela = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewAdd: {
    width: largura_tela,
    height: 320,
    backgroundColor: 'white',
  },
  viewAdd2: {
    width: largura_tela,
    height: 340,
    borderRadius: 20,
    top: 20,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonTouch: {
    padding: 15,
  },
  buttonT: {
    height: 5,
    width: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: 'black',
    width: 300,
    marginTop: 15,
    textAlign: 'center',
  },
  viewForm: {
    width: 300,
    marginTop: 15,
  },
  viewForm1: {
    flexDirection: 'row',
    width: 300,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textForm: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: 'black',
  },
  input: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 16,
  },
  viewFormButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonPlus: {
    width: 30,
    height: 30,
    backgroundColor: '#0401B0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFormButton: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: 'black',
    margin: 10,
    width: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: '#0401B0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textButton: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: 'white',
  }
});

export default styles;
