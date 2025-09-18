import { IUser } from '@/models/IUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (user: IUser) => {
    const stUser = JSON.stringify(user)
    await AsyncStorage.setItem('user', stUser)
}

export const getUser = async () => {
    const stUser = await AsyncStorage.getItem('user')
    if (stUser != null) {
        const user = JSON.parse(stUser) as IUser
        return user
    }
    return null
}

export const deleteUser = async () => {
    try {
        await AsyncStorage.removeItem('user')
        return true
    } catch (error) {
       return false 
    }
}