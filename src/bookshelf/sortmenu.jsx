import { useState } from "react"

export default function Sortmenu({onSorting}){

  function handleSorting(e){
    const sortingValue = e.target.value;
    onSorting(sortingValue)
  }

    return(
        <div>
            <select
                className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                name="sortBy"
                id="sortBy"
                onChange={handleSorting}
              >
                <option value="">Sort</option>
                <option value="name_asc" >Name (A-Z)</option>
                <option value="name_desc" >Name (Z-A)</option>
              </select>
        </div>
    )
}