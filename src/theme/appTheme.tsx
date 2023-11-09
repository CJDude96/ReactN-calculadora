import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 30,
  },
});

export const calculadoraStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mainTextFormat: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 15,
  },
  secondTextFormat: {
    color: 'gray',
    opacity: 0.7,
    fontSize: 35,
    textAlign: 'right',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});

export const btnStyles = StyleSheet.create({
  btnFormat: {
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
