import React, {useContext} from 'react';
import { dateFilter } from '../lib/utils';
import { ArticleNotFound } from '../pages/ErrorPage';
import ThemeContext from '../themeContext';


export const CardWrapper = () => {

    const { articles, isDrawerVisible } = useContext(ThemeContext);

    return (
      <>
      { articles.length === 0 ?
        <ArticleNotFound />
      :
        <div className={`grid gap-6 xl:grid-cols-3 ${isDrawerVisible ? 'grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-3'}`}>
            {articles.map((item, index) => ( <Card key={index} item={item} />))}
        </div>}
      </>
    )
}

const Card = ({item}) => {

  const openUrl = url =>  window.open(url, '_blank')

  const dateStr = dateFilter(item.publishedAt);
  item.urlToImage = item.urlToImage ? item.urlToImage : 'https://picsum.photos/id/1/200/300';

  return (
    <>
      <div className="max-w-sm max-h-[520px] w-full mx-auto bg-gray-mute rounded-lg shadow">

         <img className="rounded-t-lg w-full h-48 object-cover" src={item.urlToImage} alt={item.source.name} /> 
           
          <div className="p-5 min-h-[320px] flex flex-col justify-between">
        
            <div className='mb-2'>
              <h5 className='text-gray-300 font-semibold text-[16px]'>Author</h5>
              <span className='text-gray-400 font-normal'>{item.author || "N/A"}</span>
            </div>

            <div className='flex items-center justify-between w-full mb-2'>
              <div>
                <h5 className='text-gray-300 font-semibold text-[16px]'>Source</h5>
                <span className='text-gray-400 font-normal'>{item.source.name}</span>
              </div>
              <div>
                <h5 className='text-gray-300 font-semibold text-[16px]'>Date</h5>
                <span className='text-gray-400 font-normal'>{dateStr}</span>
              </div>
            </div>

            <h5 className="mb-2 text-lg md:text-xl font-medium tracking-tight text-white">{item.title}</h5>
              
            <div className='mt-auto'>
              <button onClick={ () => openUrl(item.url)} className="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </button>
            </div>

          </div>
      </div>
    </>
  )
}

