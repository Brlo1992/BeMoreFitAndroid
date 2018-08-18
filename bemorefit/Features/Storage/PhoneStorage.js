import AsyncStorage from "react-native"

class PhoneStorage {
    save = async (key, data) => {
        console.log("Trying set " + key);
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        }
        catch (error) {
            console.log(error);
        }
    }

    get = async (key, callback) => {
        let item = null

        try {
            await AsyncStorage.getItem(key).then((value) =>  {
                item = JSON.parse(value)
                callback(item);
            });
        }
        catch (error) {
            console.log(error);
            return "";
        }
    }
}

export default new PhoneStorage();