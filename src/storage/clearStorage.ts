import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage foi limpo!');
  } catch (error) {
    console.error('Erro ao limpar o AsyncStorage:', error);
  }
};