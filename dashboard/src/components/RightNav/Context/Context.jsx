import React, { createContext, useContext } from "react";

const DataContext = createContext();

const data = [
  {
    id: 1,
    name: "Gurpreet Singh",
    team: "Dispatch team",
    locationName: "Location_Name",
    locationNumber: "Loc-No-001",
    loadNumber: "I-I-AAA-1325",
  },
  {
    id: 2,
    name: "Aman",
    team: "Driver",
    locationName: "Pickup Location",
    locationNumber: "Loc-No-002",
    loadNumber: "I-I-AAA-1325",
  },
].map((item) => ({
  ...item,
  description: `${item.name} (${item.team}) has created ${item.locationName} ${item.locationNumber} ${item.loadNumber}`,
}));

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
