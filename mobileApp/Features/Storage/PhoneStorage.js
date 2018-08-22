import AsyncStorage from "react-native"

class PhoneStorage {
    save = async (key, data) => {
        console.log("Trying set " + key);
        try {
            await AsyncStorage.setItem(key, data);
        }
        catch (error) {
            console.log(error);
        }
    }

    get = async (key, callback) => {
        let item = null

        try {
            let result = await AsyncStorage.getItem(key);
            callback(result);
        }
        catch (error) {
            console.log(error);
            return "";
        }
    }
}

export default new PhoneStorage();