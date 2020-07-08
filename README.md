# React-Native-Navigation-Practice
A repository for troubleshooting react-navigation

## Problem this repo was created to solve
While working on a mobile application with react-native, I ran
into several problems trying to get navigation to work properly.
I was using [react-native-navigation v5](https://reactnavigation.org/blog/2020/02/06/react-navigation-5.0/)
and was having trouble initially managing navigation

The issue was that I was rendering components based on a changing state variable.
Something like the following:

```
const MyComponent = () => {
  const [itemRedirect, setItemRedirect] = useState('');
  
  return (
  (itemRedirect) ? <SingleComponent /> : <ListComponent />
  )
}
```

Within each child component there was a callback function that would change the itemRedirect state variable and this had worked (although it was quite hacky).
Upon the need to add a feature to the application where the component navigated a tab over and into the SingleComponent, I realized there was a need to
eliminate this hacky solution so therefore I did some research into refactoring. I started using the stack navigator to essentially do what I was doing here.

```
const Stack = createStackNavigator();

const MyComponent = () => {
  
  return (
    <Stack.Navigator initialRouteName='List'>
      <Stack.Screen name='List' component={ListComponent} />
      <Stack.Screen name='Single' component={SingleComponent} />
    </Stack.Navigator>
  )
}
```

Then came time to add a feature where I click on an item in another screen in a tabnavigator and it redirects from one tab to this one, and to the SingleComponent in the stack.
This can easily be done by using the navigation prop that is implicitly passed to each component. The button to navigate from a component to this Single stack screen would look
like the following:

```
<Button
  onPress={() => navigation.navigate('MyComponentRoute', {screen: 'Single', params: { id: 1}})}
>
```

This handles navigating to a nested stack navigator!
