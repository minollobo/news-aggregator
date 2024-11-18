  export const dateFilter = (publishedAt) =>  {
      let dateObj = new Date(publishedAt);
      let year = dateObj.getUTCFullYear();
      let month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
      let day = dateObj.getUTCDate().toString().padStart(2, '0');

      return `${year}-${month}-${day}`;
  }

  export const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };