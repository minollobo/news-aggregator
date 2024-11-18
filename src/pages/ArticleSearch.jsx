import React, {useContext} from "react";
import { CardWrapper } from "../components/card";
import SearchInput from "../components/searchInput";
import { Drawer, ShowDrawerButton } from "../components/drawer";
import ThemeContext from "../themeContext";
import { SkeletonWrapper } from "../components/loader";
import { ErrorPage } from "./ErrorPage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const ArticleSearchFilter = () => {

  const {
    isValidating,
    articles,
  } = useContext(ThemeContext);

      return (
      <>
        <ToastContainer position="bottom-right" theme="light" hideProgressBar={true} />
        <div className="max-w-screen-xl mx-auto">
          <div className="my-8">
            <h2 className="text-2xl md:text-3xl my-4 font-semibold text-white">
              Search & Filter Your Articles
            </h2>
            <div className="flex gap-3">
              <SearchInput />
              <ShowDrawerButton label={'Filter'} />
            </div>
          </div>
          <div className="flex sm:flex-row gap-3">
            <Drawer showSelect={true}/>
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

  export default ArticleSearchFilter;