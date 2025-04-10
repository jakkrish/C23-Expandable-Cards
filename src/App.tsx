import Card from "./components/Card"

import "./App.css"

function App() {
  const cardData = {
    title: "Harry Potter",
    content: "Harry Potter is a globally beloved series of seven fantasy novels written by J.K. Rowling, chronicling the adventures of a young wizard and his friends at Hogwarts School of Witchcraft and Wizardry, culminating in a film series of eight movies",
    expandable: false,
    image: "",
  }

  return (
    <>
      <Card data={cardData} />
    </>
  )
}

export default App
