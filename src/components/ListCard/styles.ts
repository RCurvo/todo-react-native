import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 24,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: '#262626',
    overflow: 'hidden',
  },
  textDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    maxWidth: 235,
    flexWrap: 'wrap',
  },
  textUndone: {
    color: '#F2F2F2',
    maxWidth: 235,
    flexWrap: 'wrap',
  },
})
