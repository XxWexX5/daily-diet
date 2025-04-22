import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from '../storageConfig';

import { mealsGetAll } from './mealGetAll';

export type MealType = {
    name: string;
    description: string
    data: Date;
    time: Date;
    isOnDiet: string;
}

export async function mealCreate(newMeal: MealType) {
    try{
        const generateId = () => {
            const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            
            return id;
        };

        const storedMeals = await mealsGetAll();

        const storage = JSON.stringify([...storedMeals, {id: generateId(), ...newMeal}]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

        console.log(storage);

        return storage;
    }catch(error) {
        throw error;
    }
}