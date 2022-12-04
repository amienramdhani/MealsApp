/* eslint-disable no-underscore-dangle */
class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meal(meal) {
    // eslint-disable-next-line no-underscore-dangle
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
       * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
      club-item {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      
      .meals-image {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
        object-position: center;
      }
      h2,p{
        margin : 20px;
      }
      
      </style>

        <img class="meals-image" src="${this._meal.strMealThumb}" alt="Fan Art">
        <div class="club-info">
          <h2>${this._meal.strMeal}</h2>
          <p>${this._meal.strInstructions}</p>
        </div>
      `;
  }
}

customElements.define('meal-item', MealItem);
