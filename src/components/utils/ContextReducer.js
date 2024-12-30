import { createContext, useMemo, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          tempId: action.tempId,
          price: action.price,
          quantity: action.quantity,
          size: action.size,
          img: action.img,
        },
      ];
      case  "UPDATE":
        let arr =[...state]
        arr.find((food , index)=>{
            if(food.tempId === action.tempId){
                arr[index] ={...food , quantity:parseInt(action.quantity) + parseInt(food.quantity)}
            }
        })
      return arr;
    default:
      break;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const contentValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <CartContext.Provider value={contentValue}>{children}</CartContext.Provider>
  );
};
