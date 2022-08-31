import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { Store } from 'src/app'

import './index.scss'

const Index: React.FC<{ store: Store }> = ({ store }) => {
  console.log(store)

  const {
    counterStore: { increment, decrement, incrementAsync, counter }
  } = store

  return (
    <View className="index">
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
    </View>
  )
}

export default inject('store')(observer(Index))
