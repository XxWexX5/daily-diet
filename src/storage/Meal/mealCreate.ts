import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from '../storageConfig';

import { mealsGetAll } from './mealGetAll';

export type MealType = {
    id: string;
    name: string;
    description: string;
    data: Date;
    time: Date;
    isOnDiet: string;
}

export async function mealCreate(newMeal: MealType) {
    try{
        const storedMeals = await mealsGetAll();

        const storage = JSON.stringify([...storedMeals, {...newMeal}]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

        console.log(storage);

        return storage;
    }catch(error) {
        throw error;
    }
}