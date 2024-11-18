import React, {useContext, useEffect} from "react";
import { CardWrapper } from "../components/card";
import { Drawer, ShowDrawerButton } from "../components/drawer";
import SearchInput from "../components/searchInput";
import ThemeContext from "../themeContext";
import { ErrorPage } from "./ErrorPage";
import { SkeletonWrapper } from "../components/loader";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const PersonalizedNewsFeed = () => {

  const {setIsValidating, isValidating, articles, setArticles} = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    setIsValidating(true)
    const checkValue = JSON.parse(sessionStorage.getItem('personalized'))
    
    if(location.pathname === "/personal-feed" && checkValue) {
      setArticles(checkValue);
    }
    setIsValidating(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
    <>
      <ToastContainer position="bottom-right" theme="light" hideProgressBar={true} />
      <div className="max-w-screen-xl mx-auto">
        <div className="my-8">

          <h2 className="text-2xl md:text-3xl my-4 font-semibold text-white">
            Customize Your News Feed
          </h2>

          <div className="flex gap-3">
            <SearchInput />
            <ShowDrawerButton label={'Customize'}/>
          </div>

        </div>
        <div className="flex sm:flex-row gap-3">
          <Drawer showSelect={false}/>
          {isValidating ? (
            <SkeletonWrapper />
          ) : articles ? (
            <CardWrapper />
          ) : (
            <ErrorPage />
          )}
        </div>
      </div> 
    </>
   
    )
}

export default PersonalizedNewsFeed;