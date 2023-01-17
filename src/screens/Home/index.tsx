/* eslint-disable jsx-a11y/alt-text */
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'
import { styles } from './styles'
import Logo from '../../assets/Logo.png'
import { ListType } from '../../components/ListType'
import { EmptyList } from '../../components/EmptyList'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo}></Image>
      </View>
      <View style={styles.listContent}>
        <View style={styles.form}>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: '#ffff', fontSize: 15, fontFamily: '' }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createdAndDone}>
          <ListType title={'Criadas'} count={4} />
          <ListType title={'Concluidas'} count={6} />
        </View>
        <FlatList
          data={[]}
          renderItem={({ item }) => (
            <Text style={{ color: '#fff', fontSize: 30 }}>Item maneiro</Text>
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  )
}
