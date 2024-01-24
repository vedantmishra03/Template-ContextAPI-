//we have to make centaralised data provider 
// we use context api for that => 

// there are several step steps of the using context api

// Step1-> create context and export 
// Step2-> create provider and export
// Step3-> import provider in app.js and wrap the app.js with provider
// Step4-> import context in the component where we want to use the data by using Hook useContext() in any component 

// all the funcion and dynamic data is listed here and we can use it in any component by using useContext() hook


import  { createContext,useState } from 'react';

// step 1
export const AppContext = createContext();

// step 2
export const AppContextProvider = ({children}) => {
   
//    define all the function and all the variables 
 const [name ,setName ]=useState();
//  similarly define all the function and all the variables

   
const value={
    name,
    setName,
    // list all the function and all the variables which you want to export 
}

// setp3=>
// now we have to wrap the index.js with AppContextProvider => all coomponent 


// step 4 =>
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;