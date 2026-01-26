import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 16 },
  field: { marginBottom: 14 },
  label: { fontSize: 14, color: '#333', marginBottom: 6 },
  inputWrap: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  input: { fontSize: 16, paddingRight: 36 },
  eye: { position: 'absolute', right: 10, top: 12 },
  hint: { fontSize: 12, color: '#777', marginTop: 6 },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
