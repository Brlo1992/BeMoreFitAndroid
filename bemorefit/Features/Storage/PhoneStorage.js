import AsyncStorage from "react-native"

class PhoneStorage {
    async save(key, data) {
        console.log("Trying set " + key);
        try {
            await AsyncStorage.setItem("@BeMoreFit:" + key, data);
        }
        catch (error) {
            console.log(error);
        }
    }

    async get(key) {
        let item = null

        try {
            await AsyncStorage.getItem("@BeMoreFit:" + key).then((value) => item  = value);
            return item;
        }
        catch (error) {
            console.log(error);
            return "";
        }
    }
}

export default new PhoneStorage();