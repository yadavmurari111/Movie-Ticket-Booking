import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGGEDIN_USER = '@Logged_In_User';
export const DATA = '@dataArray';

export const storeDataToAsyncStorage = async (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  console.log(value);
  console.log(jsonValue);
  console.log('saving data....');
  await AsyncStorage.setItem(key, jsonValue);
};

export const getDataFromStorage = async (key: string) => {
  return await AsyncStorage.getItem(key).then(jsonValue => {
    return jsonValue ? JSON.parse(jsonValue) : [];
  });
};
