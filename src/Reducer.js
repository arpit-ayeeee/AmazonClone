export const initialState = {
    basket: [],
    orderedProd:[],     //For final record of products, FOR ORDERS
    user: null
};
//Selector, for calculating the total amount in the basket
export const getBasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0); 
//This will iterate over every item and will add each item's price to the amount which is initially zero


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":               //Like whenever there is this action type
            return {                        //We'll take the current state, and in basket we'll take the current state of basket and add the new data to it
                ...state,
                // we put everthing which the basket state already had and then
                // added action.item which adds the next item
                basket: [...state.basket, action.item],
                orderedProd: [...state.basket, action.item] //we'll add to to in this
            };
        case "REMOVE_FROM_BASKET":
            //TWO TIMES FOR BASKET AND ORDERED PROD
            const index= state.basket.findIndex(        //We'll use this logic to find the index of the item to be removed
                (basketItem) => basketItem.id === action.id
            );
            const index1= state.orderedProd.findIndex(        //We'll use this logic to find the index of the item to be removed
                (orderedProdItem) => orderedProdItem.id === action.id
            );

            //CREATING TWO NEW BASKETS AND ORDEREDPROD
            let newBasket = [...state.basket];      //Then we'll make a copy of the basket
            let neworderedProd = [...state.orderedProd];

            //TWO TIMES
            if(index >= 0){
                newBasket.splice(index, 1);         //Then remove the index position of the that element by one

            }else{
                console.warn(`Cant remove the product (id: ${action.id}) as it's not in cart`)
            }
            if(index1 >= 0){
                neworderedProd.splice(index1, 1);         //Then remove the index position of the that element by one

            }else{
                console.warn(`Cant remove the product (id: ${action.id}) as it's not in cart`)
            }
            return{
                ...state, 
                basket: newBasket,  //Then we'll update the state with the new basket,
                orderedProd: neworderedProd
            };
        case "SET_USER":            //We'll update the datalayer, with the info of the current user, once the user logs in
            return{
                ...state,           //We'll update the user data with new input, for login it's new user's data, and for logout it'll be null
                user: action.user
            };
        case "EMPTY_BASKET":
            return{
                ...state,
                basket: []
            };
        default: 
        return state;
    }
}


export default reducer;