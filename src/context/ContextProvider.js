import { useState, createContext } from 'react'

const SearchContext = createContext({});
export const ContextProvider = ({children}) => {
  const [context, setContext] = useState({searchOne: '', searchTwo: '', searchThree: ''});
  return (
    <SearchContext.Provider value={{ context, setContext }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;