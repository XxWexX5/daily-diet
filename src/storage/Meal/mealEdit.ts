import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from '../storageConfig';
import { mealsGetAll } from "./mealGetAll";
import { MealType } from "./mealCreate";

export async function mealEdit(data: MealType) {
    try{
        const storedMeals = await mealsGetAll();

        const removeMeal = storedMeals.filter((meal: MealType) => meal.id === data.id);

        const storage = JSON.stringify([{...removeMeal, ...data}]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } catch(error) {
        throw error;
    }
}