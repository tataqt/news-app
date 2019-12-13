import { StoreStructure } from "../enteties/StoreStructer";
import { Reducer } from "react";
import { ActionTypeBase } from "../actions/actionTypes";
import { LOAD_NEWS, ADD_NEWS } from "../actions/newsActions";

const initState: StoreStructure = {
    articles: [],
    read: [],
    favorite: [],
    withComplains: []
};

export const newsReducer: Reducer<any, any> = (state: StoreStructure, action: ActionTypeBase) => {
    switch (action.type) {
        case LOAD_NEWS:
            console.log('LOAD_NEWS (action in reducer');
            break;

        case ADD_NEWS:
            console.log('ADD_NEWS (action in r  educer');
            break;

        default:
            return state;
    }
}