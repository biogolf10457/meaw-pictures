import { useState } from "react";
import "./App.css";
import LoadCat from "./components/LoadCat";
import FavCat from "./components/FavCat";

function App() {
  const [favCats, setFavCats] = useState<any[]>([]);

  const name: string = "Meaw Pictures";

  function addFavCat(name: string, url: string) {
    setFavCats((currentFavCats) => [
      { id: crypto.randomUUID(), name, url },
      ...currentFavCats,
    ]);
  }

  function deleteFavCat(id: string) {
    setFavCats((currentFavCats) =>
      currentFavCats.filter((favCat) => favCat.id !== id)
    );
  }

  return (
    <div className="App">
      <h1 className="text-center m-8 text-4xl font-bold text-blue-500 tracking-wide">
        {name}
      </h1>
      <div className="flex">
        <LoadCat addFavCat={addFavCat} />
        <FavCat favCats={favCats} deleteFavCat={deleteFavCat} />
      </div>
    </div>
  );
}

export default App;
