export const initialState = {
    basket: []
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
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            const index= state.basket.findIndex(        //We'll use this logic to find the index of the item to be removed
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];      //Then we'll make a copy of the basket
            if(index >= 0){
                newBasket.splice(index, 1);         //Then remove the index position of the that element by one

            }else{
                console.warn(`Cant remove the product (id: ${action.id}) as it's not in cart`)
            }
            
            return{
                ...state, 
                basket: newBasket  //Then we'll update the state with the new basket
            };
        default: 
        return state;
    }
}


export default reducer;