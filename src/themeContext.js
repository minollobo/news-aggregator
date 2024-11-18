import React, { createContext, useState, useEffect } from 'react';
import { fetchArticles } from './lib/services';
import { toast } from 'react-toastify';
import { getDate } from './lib/utils';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const [searchInput, setSearchInput] = useState('public');

  const [isValidating, setIsValidating] = useState(true);

  const [articlesData, setArticlesData] = useState([]);
  const [articles, setArticles] = useState([]);

  const [articleFilters, setArticleFilters] = useState({
    source: [],
    sortby: ['popularity', 'publishedAt', 'relevancy'],
    author: [],
    date: '2024-10-22',
  });
  const [selectedInput, setSelectedInput] = useState({source: 'All', sortby: 'popularity'});

  const [checkInputs, setCheckInputs] = useState({
    sources: [],
    authors: []
  });

  const handleCheckboxChange = (e, label) => {
    const { checked, value } = e.target;

    setCheckInputs(prevInputs => ({
      ...prevInputs,
      [label]: checked
        ? [...prevInputs[label], value] 
        : prevInputs[label].filter(item => item !== value)
    }));
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  let delayTimer;

  const handleSearchChange = (e) => {
    const input = e.target.value;
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
      input ? setSearchInput(input) : setSearchInput('public');
    }, 1000);
  };

  const handleSelectedInput = (e, label) => {

    const input = e.target.value;
    const updatedFilters = {
      ...selectedInput,
      [label]: input
    };

    if (label === 'sortby') updatedFilters.source = 'All';

    setSelectedInput(updatedFilters);

    const filteredArticles = articlesData.filter(article => {
      return  (updatedFilters.source === 'All' || article.source.name === updatedFilters.source)
    });

    setArticles(filteredArticles);
  }

  const handleSubmit = () => {
    sessionStorage.setItem('personalized', JSON.stringify(articles));
    toast.success('Saved Successfully');
  }

  const fetchData = async (searchInput, date, sortBy, currentDate) => {
    setIsValidating(true);
    const response = await fetchArticles(searchInput, date, sortBy, currentDate);
    setArticlesData(response.data.articles);
    setArticles(response.data.articles);
    setIsValidating(false);

    setSelectedInput(prev => ({
      ...prev,
      source: 'All'
    }));
  };

  useEffect(() => {
    const maxDate = new Date("2024-09-08");
    const currentDate = getDate();
    if (articleFilters.date > maxDate.toISOString().split('T')[0]) {
      fetchData(searchInput, articleFilters.date, selectedInput.sortby, currentDate);
    } else {
      toast.info('Please select a date after 22/05/2024');
    }    
  }, [searchInput, articleFilters.date, selectedInput.sortby]);

  useEffect(() => {
    const uniqueSources = [...new Set(articlesData.map(article => article.source.name))];
    const uniqueAuthors = [...new Set(articlesData.map(article => article.author))];

    setArticleFilters(prevFilters => ({
      ...prevFilters,
      source: uniqueSources,
      author: uniqueAuthors
    }));
  }, [articlesData, setArticleFilters]);

  useEffect(() => {
    const filteredPersonalizedArticles = articlesData.filter(article => {
      const isSourceIncluded =  checkInputs.sources.includes(article.source.name);
      const isAuthorIncluded = checkInputs.authors.includes(article.author);
      return isSourceIncluded || isAuthorIncluded;
    })

    setArticles(filteredPersonalizedArticles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkInputs]);

  return (
    <ThemeContext.Provider       
      value={{
        isDrawerVisible,
        toggleDrawer,
        searchInput,
        handleSearchChange,
        isValidating,
        setIsValidating,
        articles,
        setArticles,
        handleSubmit,
        articleFilters,
        selectedInput,
        setArticleFilters,
        handleSelectedInput,
        handleCheckboxChange,
        checkInputs
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;