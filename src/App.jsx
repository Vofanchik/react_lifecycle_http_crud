import './App.css';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(
    () => {
      axios.get('http://localhost:7070/notes')
        .then(responce => {
          setCards(responce.data);
        })
    }, []);

  const handleSubmit = (currentText) => {
    axios.post('http://localhost:7070/notes', {
      "id": 0,
      "content": currentText
    })
  };

  const onDeleteCard = (idDeletedCard) => {
    axios.delete('http://localhost:7070/notes/' + idDeletedCard);
    updateCards();
  }

  const updateCards = () => {
    axios.get('http://localhost:7070/notes')
        .then(responce => {
          setCards(responce.data);
        })
  }

  return (
    <div className="App">
      <Header updateCards = {updateCards}/>
      <Cards cards={cards} onDeleteCard={onDeleteCard} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
