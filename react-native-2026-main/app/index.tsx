import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [filePath, setFilePath] = useState("app/index.tsx");
  const [buttonTitle, setButtonTitle] = useState("Duplicate");
  
  const [list, setList] = useState([
  ]);


  
  const buttonPressed = function() {
    if(buttonTitle === "Duplicate"){
      setButtonTitle("Tapped");
    }else {
      setButtonTitle("Duplicate");
    }
    setList([
      // ...list structures the array
      ...list,
      "Another Hello"
    ]);
  };

  setTimeout(function(){
    setFilePath("app/home.tsx");
  }, 5000);

  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20
            }}
          >Edit {filePath} to edit this screen.</Text>
          <FlatList
            data={list}
            renderItem={({item}) => <Item title={item} />}
          />
          <Button
            title={buttonTitle}
            onPress={buttonPressed}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
