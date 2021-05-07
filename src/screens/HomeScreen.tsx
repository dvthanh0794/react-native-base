import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import { Button } from "react-native-elements";

import { useAppSelector, useAppDispatch } from "../app/hooks"
import { decrement, increment } from "../features/counter/counterSlice"

const RaisedButton = props => <Button raised {...props} />;

const HomeScreen: React.FC = () => {
  const a = `- Cách sử dụng các component: TextInput, TouchableOpacity, Flatlist, Image, View…
  - Xử lý state, và props: giống React JS
  - React Native life cycle
  - Cách call API: giống React JS axios,…
  - React Navigation
  - Redux, Redux Thunk, Saga: Giống React JS. 
  - Realm, SQLite, AsyncStorage,…
  - Một số thư viện hay sử dụng: Firebase (authentication, push notifi, clould firestore) , Google Mập API, 
  - Cách build app Android và IOS`

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <View>
      <View style={styles.navigator}>
        <Text>{count}123</Text>
      </View>
      <RaisedButton title="Increment" onPress={() => dispatch(increment())}/>
      <RaisedButton title="Decrement" onPress={() => dispatch(decrement())}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 200,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  navigator: {
    marginTop: 200,
  }
});

export default HomeScreen;
