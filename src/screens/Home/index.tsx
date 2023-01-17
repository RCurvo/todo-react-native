/* eslint-disable jsx-a11y/alt-text */
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { styles } from './styles'
import Logo from '../../assets/Logo.png'
import { ListType } from '../../components/ListType'
import { EmptyList } from '../../components/EmptyList'
import { ListCard } from '../../components/ListCard'
import { useState } from 'react'

type todoItemsType = {
  title: string
  done: boolean
}

export function Home() {
  const [todoItems, setTodoItems] = useState<todoItemsType[]>([
    { title: 'Primeiro todo', done: false },
    { title: 'Segundo todo', done: false },
    { title: 'Terceiro todo', done: false },
  ])
  const [inputText, setInputText] = useState('')

  function handleCheckItem(todo: todoItemsType) {
    const updatedTodo = todoItems.map((item) => {
      if (item.title === todo.title) {
        item.done = !item.done
        return item
      }
      return item
    })
    setTodoItems(updatedTodo)
  }
  function handleDeleteItem(todo: todoItemsType) {
    const newArray = todoItems.filter((item) => item.title !== todo.title)
    setTodoItems(newArray)
  }
  function handleAddItem(item: string) {
    setTodoItems((state) => [...state, { title: item, done: false }])
    setInputText('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo}></Image>
      </View>
      <View style={styles.listContent}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity
            onPress={() => handleAddItem(inputText)}
            style={styles.button}
          >
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
          data={todoItems}
          renderItem={({ item }) => (
            <ListCard
              done={item.done}
              onCheck={() => handleCheckItem(item)}
              onDelete={() => handleDeleteItem(item)}
              title={item.title}
            />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  )
}
