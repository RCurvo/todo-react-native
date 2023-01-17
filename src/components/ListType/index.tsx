import { View, Text } from 'react-native'
import { styles } from './styles'

type ListTypeProps = {
  title: string
  count: number
}

export function ListType({ title, count }: ListTypeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View>
        <View style={styles.countBox}>
          <Text style={{ color: '#D9D9D9', fontFamily: 'Inter_700Bold' }}>
            {count}
          </Text>
        </View>
      </View>
    </View>
  )
}
