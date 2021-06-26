import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    ALTERNATE_PRODUCT_LIST_REQUEST,
    ALTERNATE_PRODUCT_LIST_SUCCESS,
    ALTERNATE_PRODUCT_LIST_FAIL
} from '../constants/productConstants';

export const productListReducer = (state = {products: []}, action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading :true, products: []}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}

export const productDetailsReducer = (state = {product: []}, action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading :true, product: []}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}

export const alternateProductListReducer = (state = {alternate_products: []}, action) =>{
    switch(action.type){
        case ALTERNATE_PRODUCT_LIST_REQUEST:
            return {loading :true, alternate_products: []}
        case ALTERNATE_PRODUCT_LIST_SUCCESS:
            return {loading:false, alternate_products: action.payload}
        case ALTERNATE_PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}