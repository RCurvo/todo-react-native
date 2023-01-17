/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import {
  View,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import { styles } from './styles'
import Logo from '../../assets/Logo.png'
import { ListType } from '../../components/ListType'
import { EmptyList } from '../../components/EmptyList'
import { ListCard } from '../../components/ListCard'
import EvilIcons from '@expo/vector-icons/EvilIcons'

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
  const [todoCount, setTodoCount] = useState(todoItems.length)
  const [todoDoneCount, setTodoDoneCount] = useState(0)

  function handleCheckItem(todo: todoItemsType) {
    const updatedTodo = todoItems.map((item) => {
      if (item.title === todo.title) {
        item.done = !item.done
        const adder = item.done ? 1 : -1
        setTodoDoneCount((state) => state + adder)
        return item
      }
      return item
    })
    setTodoItems(updatedTodo)
  }
  function handleDeleteItem(todo: todoItemsType) {
    const newArray = todoItems.filter((item) => {
      if (item.title === todo.title) {
        if (item.done === true) {
          setTodoDoneCount((state) => state - 1)
        }
      }
      return item.title !== todo.title
    })
    setTodoItems(newArray)
    setTodoCount((state) => state - 1)
  }
  function handleAddItem(item: string) {
    if (inputText.length === 0) {
      return
    }
    setTodoItems((state) => [...state, { title: item, done: false }])
    setInputText('')
    setTodoCount((state) => state + 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo}></Image>
      </View>
      <View style={styles.listContent}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableHighlight
            onPress={() => handleAddItem(inputText)}
            style={styles.button}
            underlayColor="#4EA8DE"
            activeOpacity={1}
          >
            <EvilIcons name="plus" size={24} color="#F2F2F2" />
          </TouchableHighlight>
        </View>
        <View style={styles.createdAndDone}>
          <ListType title={'Criadas'} count={todoCount} />
          <ListType title={'Concluidas'} count={todoDoneCount} />
        </View>
        <FlatList
          data={todoItems}
          keyExtractor={(item) => item.title}
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
