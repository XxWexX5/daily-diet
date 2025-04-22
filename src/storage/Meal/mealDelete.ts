import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from '../storageConfig';
import { mealsGetAll } from "./mealGetAll";
import { MealType } from "./mealCreate";

export async function mealDelete(id: string) {
    try{
        const storedMeals = await mealsGetAll();

        const newStoredMeals = storedMeals.filter((meal: MealType) => meal.id !== id);

        const storage = JSON.stringify([...newStoredMeals]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } catch(error) {
        throw error;
    }
}