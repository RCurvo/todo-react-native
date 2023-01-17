import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    height: '100%',
  },
  header: {
    width: 375,
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  input: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
    backgroundColor: '#262626',
    border: '1px solid #5e60ce',
    color: '#f2f2f2',
  },
  form: {
    marginHorizontal: 24,
    marginTop: -30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createdAndDone: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
})
