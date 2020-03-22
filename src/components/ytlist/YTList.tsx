import React from 'react';
import { observer } from "mobx-react";
import { useObserver } from 'mobx-react-lite';
import { storeContext } from '../../context';


export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return useObserver(() => {
    return (
    <ul>
      {cities.map((city, index) => <li key={index}>{city}</li>)}
    </ul>
  );
});
}

export const YTList = () => {
  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");

  return (
    <>
    <button onClick={store.add}>ADD</button>
    {/* <CityView cities={store.filteredCities} /> */}
    </>
    
  );

  // return useObserver(() => {
  //   return (
  //     <>
  //     <button onClick={store.add}>ADD</button>
  //     <CityView cities={store.filteredCities} />
  //     </>
      
  //   )
  // });
}

export default YTList;
