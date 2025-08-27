import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://688c7df0cd9d22dda5cd55ca.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((array) => {
        setPizzas(array);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? [...new Array(6).keys()].map((index) => <Skeleton key={index} />) : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}</div>
    </>
  );
};

export default Home;
