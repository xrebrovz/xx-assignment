import { Platform, PixelRatio, Dimensions } from 'react-native'

export default class helper {


}

export const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360),
          s = Math.floor(Math.random() * 100) + '%',
          l = Math.floor(Math.random() * 60) + '%';
    return `hsl(${h},${s},${l})`;
}

export const IsNullArray = (data) => {
    try {
        if (data !== undefined) {
            if (data.length <= 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } catch (error) {
        return true
    }
}

export const IsNullData = (data) => {
    try {
        if (data !== undefined) {
            if (data === null || data === '') {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } catch (error) {
        return true
    }
}

export const IsUndefined = (data) => {
    try {
        if (data !== undefined) {
            return false
        } else {
            return true
        }
    } catch (error) {
        return true
    }
}