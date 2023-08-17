import React, {FunctionComponent, PropsWithChildren, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ItemComponent: FunctionComponent<
  PropsWithChildren<{
    item: any;
    AddButtonHandler(item: any): void;
    AddItem(item: any): void;
    removeItem(item: any): void;
  }>
> = ({AddButtonHandler, item, removeItem, AddItem}) => {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 8,
          borderBottomWidth: 0.4,
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Text style={{fontSize: 16, color: 'black'}}>{item.title}</Text>
          <Text style={{fontSize: 16, color: 'black'}}>{'GG 100'}</Text>
        </View>
        <View>
          <Text>{'₹' + item.price}</Text>
        </View>
        <View>
          {count === 0 ? (
            <TouchableOpacity
              onPress={() => {
                AddButtonHandler(item);
                AddItem(item);
                setCount(count + 1);
              }}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 25,
                borderColor: 'orange',
              }}>
              <Text>{'Add'}</Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderWidth: 1,
                width: 80,
                borderRadius: 10,
                paddingVertical: 5,
                borderColor: 'orange',
              }}>
              <TouchableOpacity
                onPress={() => {
                  AddButtonHandler(item);
                  setCount(count - 1);
                  removeItem(item);
                }}>
                <Text style={{padding: 2}}>{'-'}</Text>
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity
                onPress={() => {
                  AddButtonHandler(item);
                  setCount(count + 1);
                  AddItem(item);
                }}>
                <Text style={{padding: 2}}>{'+'}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ItemComponent;
