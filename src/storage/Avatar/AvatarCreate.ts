import AsyncStorage from "@react-native-async-storage/async-storage";

import { AVATAR_COLLECTION } from '../storageConfig';

export async function avatarCreate(avatar: string) {
    try{
        const storage = avatar;
        
        await AsyncStorage.setItem(AVATAR_COLLECTION, storage);

        return storage;
    }catch(error) {
        throw error;
    }
}