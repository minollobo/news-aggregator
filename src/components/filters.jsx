import React, {useContext} from "react";
import ThemeContext from "../themeContext";
import DateInput from './datePicker';

import { CheckBoxComponent, SelectComponent } from './dropdown';

export const ArticleFilter = () => {
  const {articleFilters} = useContext(ThemeContext); 

  return (
    <>
      <SelectComponent label="sortby" options={articleFilters.sortby} />
      <SelectComponent label="source" options={articleFilters.source} />
      <DateInput />
    </>
  )
}

export const PersonalFeedFilter = () => {
  const {articleFilters, handleSubmit} = useContext(ThemeContext);

  return (
    <>
          <CheckBoxComponent label="Sources" name="sources" checkOptions={articleFilters.source}/>
          <CheckBoxComponent label="Authors" name="authors" checkOptions={articleFilters.author}/>
          <div className="px-2">
            <button onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">Save</button>
          </div>
    </>
  )
}
