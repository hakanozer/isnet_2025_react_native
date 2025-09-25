import AsyncStorage from "@react-native-async-storage/async-storage";

export const likesAddRemove = async (id: number) => {
    const stObj = await AsyncStorage.getItem('likes')
    if (stObj != null) {
        // daha önce likes var
        const likesArr = JSON.parse(stObj) as number[]
        const index = likesArr.findIndex(item => item === id)
        if (index == -1) {
            // id yok
            likesArr.push(id)
        }else {
            // id var - sil
            likesArr.splice(index, 1)
        }
        const jsonArr = JSON.stringify(likesArr)
        await AsyncStorage.setItem('likes', jsonArr)
    }else {
        // daha önce likes yok
        const likesArr = [id]
        const jsonArr = JSON.stringify(likesArr)
        await AsyncStorage.setItem('likes', jsonArr)
    }
}


export const allLikes = async () => {
    const stObj = await AsyncStorage.getItem('likes')
    if (stObj) {
        const likesArr = JSON.parse(stObj) as number[]
        return likesArr
    }else {
        return []
    }
}


export const isLiked = async (id: number) => {
    const stObj = await AsyncStorage.getItem('likes')
    if (stObj) {
        const likesArr = JSON.parse(stObj) as number[]
        const index = likesArr.findIndex(item => item === id)
        return index !== -1
    }else {
        return false
    }
}