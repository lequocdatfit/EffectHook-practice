import React, { useState } from 'react';
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite javascript library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'We use React by create a component.'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  }, 
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shape of Blue',
    value: 'blue'
  }
];


const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown selected={selected}
          onSelectedChange={setSelected}
          options={options} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App;

