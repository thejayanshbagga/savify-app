import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  selector: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 180,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectorText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 10,
    width: 220,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});
