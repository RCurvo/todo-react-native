/* eslint-disable jsx-a11y/alt-text */
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import EvilIcons from '@expo/vector-icons/EvilIcons'

type ListCardProps = {
  done?: boolean
  title: string
  onDelete: () => void
  onCheck: () => void
}

export function ListCard({
  done = false,
  title,
  onDelete,
  onCheck,
}: ListCardProps) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <BouncyCheckbox fillColor="#5E60CE" onPress={onCheck} size={24} />
        <Text style={done ? styles.textDone : styles.textUndone}>{title}</Text>
      </View>
      <Pressable
        onPress={onDelete}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#333333' : 'transparent',
          },
          { padding: 10 },
        ]}
      >
        {({ pressed }) => (
          <EvilIcons
            name="trash"
            size={30}
            color={pressed ? '#E25858' : '#808080'}
          />
        )}
      </Pressable>
    </View>
  )
}
