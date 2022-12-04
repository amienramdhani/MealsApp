import axios from 'axios';

class DataSource {
  static async MealName(keyword) {
    const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
    const response = await axios.get(baseUrl);

    if (response.data.meals) {
      return Promise.resolve(response.data.meals);
      // eslint-disable-next-line no-else-return
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`${keyword} is not found`);
    }
  }

  static async CategoryMeal() {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await axios.get(baseUrl);

    if (response.data.meals) {
      return Promise.resolve(response.data.meals);
      // eslint-disable-next-line no-else-return
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Data Not Found');
    }
  }
}

export default DataSource;
