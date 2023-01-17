/* eslint-disable jsx-a11y/alt-text */
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Trash from '../../assets/trash.png'

type ListCardProps = {
  done?: boolean
  title: string
  onDelete: () => void
  onCheck: () => void
}

export function ListCard({
  done = true,
  title,
  onDelete,
  onCheck,
}: ListCardProps) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <BouncyCheckbox
          fillColor="#5E60CE"
          isChecked={done}
          onPress={onCheck}
          size={24}
        />
        <Text style={done ? styles.textDone : styles.textUndone}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Image source={Trash} />
      </TouchableOpacity>
    </View>
  )
}
