const searchImages = (query) => {
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        renderData(data.images);
      })
      .catch((err) => console.log(err));
  };

  searchImages("cars")