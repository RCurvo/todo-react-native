/* eslint-disable jsx-a11y/alt-text */
import { View, Image, Text } from 'react-native'
import Clipboard from '../../assets/Clipboard.png'
import { styles } from './styles'

export function EmptyList() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 48,
      }}
    >
      <Image source={Clipboard} accessibilityLabel="Imagem de lista vazia" />
      <Text style={styles.heading}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
