import { createContext, useState } from "react";
import React from 'react'

// creating context for updation

export let SearchContext = createContext()


const Context = (props) => {
    let [search, setSearch] = useState("kota")
  return (
    <div>
      <SearchContext.Provider value={{search, setSearch}}>
        {props.children}
      </SearchContext.Provider>
    </div>
  )
}

export default Context
