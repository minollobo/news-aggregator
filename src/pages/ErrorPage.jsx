import React from "react";

export const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-2xl mx-auto text-white">There are some technical issues at the moment. Please try again later.</h2>
    </div>    
  )
}

export const PageNotFound = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-2xl mx-auto text-white">Page Not Found</h2>
    </div>
  )
}

export const ArticleNotFound = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-2xl mx-auto text-white">No articles found. Please try a different search term.</h2>  
    </div>
  )
}

