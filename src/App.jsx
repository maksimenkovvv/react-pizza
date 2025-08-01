import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import React from 'react';
import './scss/app.scss';

function App() {
  let [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('https://688c7df0cd9d22dda5cd55ca.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((array) => {
        setPizzas(array);
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
