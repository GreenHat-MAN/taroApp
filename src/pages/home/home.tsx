import { View } from '@tarojs/components'
import { inject, observer } from 'mobx-react'

const home: React.FC = () => {
  return <View>主页</View>
}
export default inject('store')(observer(home))
