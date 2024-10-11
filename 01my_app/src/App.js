// import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  // const itemTwoName = "noodles";
  const response = [
    {
      name: "Maggie",
      day: "20",
      month: "June",
      year: "1990",
    },
    {
      name: "noodles",
      day: "10",
      month: "July",
      year: "1991",
    }
  ];
  return (
    <div>
      <Item name={response[0].name}>This will be printed by using props.children</Item>     {/*this is used for maggie*/}
      <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>   {/* this is used for date*/}

      <Item name={response[1].name}></Item>     {/*this is used for maggie*/}
      <ItemDate day={response[1].day} month={response[1].month} year={response[1].year}></ItemDate>   {/* this is used for date*/}
      <div className="App">Hello Guys</div>
    </div>
  );
}

export default App;
