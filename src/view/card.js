function card() {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const getCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const responseJson = await response.json();

      if (responseJson.error) {
        // eslint-disable-next-line no-use-before-define
        showResponseMessage(responseJson.message);
      } else {
        // eslint-disable-next-line no-use-before-define
        renderAllCategories(responseJson.categories);
      }
    } catch (error) {
      // eslint-disable-next-line no-use-before-define
      showResponseMessage(error);
    }
  };
  const renderAllCategories = (books) => {
    const listBookElement = document.querySelector('#listMeals');
    listBookElement.innerHTML = '';

    books.forEach((categories) => {
      listBookElement.innerHTML += `      
      <div class="col">
        <div class="card m-2">
          <img src="${categories.strCategoryThumb}" class="card-img-top" style="width:20px height:20px">
          <div class="card-body">
            <h5 class="card-title">${categories.strCategory}</h5>
            <p class="card-text">${categories.strCategoryDescription}</p>
          </div>
        </div>
      </div>
      `;
    });
  };
  const showResponseMessage = (message = 'Check your internet connection') => {
    // eslint-disable-next-line no-alert
    alert(message);
  };

  getCategories();
}

export default card;
