import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
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
              <PizzaBlock title="Пепперони" price={495} />
              <PizzaBlock title="Чизбургер" price={595} />
              <PizzaBlock title="Мясная" price={665} />
              <PizzaBlock title="Пепперони фреш" price={395} />
              <PizzaBlock title="Дьябло" price={666} />
              <PizzaBlock title="Острая" price={490} />
              <PizzaBlock title="Детская" price={430} />
              <PizzaBlock title="Жгучая" price={500} />
              <PizzaBlock title="Маргарита" price={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
