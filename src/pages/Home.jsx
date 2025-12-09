import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch('https://688c7df0cd9d22dda5cd55ca.mockapi.io/pizzas?category=' + categoryId)
      .then((res) => res.json())
      .then((array) => {
        setPizzas(array);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortId} onClickSort={(id) => setSortId(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? [...new Array(6).keys()].map((index) => <Skeleton key={index} />) : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}</div>
    </div>
  );
};

export default Home;
