import '../component/meal-list';
import '../component/search-bar';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.MealName(searchElement.value);
      // eslint-disable-next-line no-use-before-define
      renderResult(result);
    } catch (message) {
      // eslint-disable-next-line no-use-before-define
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    mealListElement.meals = results;
  };

  const fallbackResult = (message) => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
