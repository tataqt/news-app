import { LOAD_NEWS, ADD_NEWS } from "./newsActions"

export const loadNews = () => {
    return {
        type: LOAD_NEWS
    }
}

export const addNews = () => {
    return {
        type: ADD_NEWS,
        
    }
}