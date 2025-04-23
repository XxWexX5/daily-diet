import AsyncStorage from "@react-native-async-storage/async-storage";

import { AVATAR_COLLECTION } from '../storageConfig';

export async function avatarGet() {
    try{
        const storage = await AsyncStorage.getItem(AVATAR_COLLECTION);

        return storage;
    } catch(error) {
        throw error;
    }
}