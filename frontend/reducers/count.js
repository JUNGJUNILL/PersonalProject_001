import produce from 'immer'


export const initialState = {

        number : 0,
} 

export const COUNT_PLUS_REQUEST = 'COUNT_PLUS_REQUEST'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_PLUS_SUCCESS = 'COUNT_PLUS_SUCCESS'; 
export const COUNT_PLUS_FAILURE = 'COUNT_PLUS_FAILURE'; 




export const COUNT_MINUS_REQUEST = 'COUNT_MINUS_REQUEST'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS_SUCCESS = 'COUNT_MINUS_SUCCESS'; 
export const COUNT_MINUS_FAILURE = 'COUNT_MINUS_FAILURE'; 



// export const countMinusAction = () =>({
//     type:COUNT_MINUS,
// });



const reducer = (state = initialState, action) =>{

    return produce(state,(draft)=>{

        switch (action.type) {
            
            case COUNT_PLUS_REQUEST: {
                break; 
            }

            case COUNT_PLUS_SUCCESS: {
                draft.number = state.number + action.data;
                break; 
                
            }
                
            case COUNT_MINUS_SUCCESS:
                draft.number = state.number - action.data; 
                break; 

                
            default :  break; 
             
        }

    })

}; 

export default reducer;