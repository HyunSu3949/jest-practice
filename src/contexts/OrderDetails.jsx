import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constant";

const OrderDetails = createContext();

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error("context Error!");
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    const newOptionCounts = { ...optionCounts };

    newOptionCounts[optionType][itemName] = newItemCount;

    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }

  function calulateTotal(optionType) {
    const countsArray = Object.values(optionCounts[optionType]);
    const eachCost = pricePerItem[optionType];
    const totalCounts = countsArray.reduce((acc, c) => acc + c, 0);

    return totalCounts * eachCost;
  }

  const totals = {
    scoops: calulateTotal("scoops"),
    toppings: calulateTotal("toppings"),
  };
  const value = { optionCounts, updateItemCount, resetOrder, totals };
  return (
    <OrderDetails.Provider value={value} {...props}></OrderDetails.Provider>
  );
}
