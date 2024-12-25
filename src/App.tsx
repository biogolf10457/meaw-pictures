import { useState, useEffect } from "react";
import "./App.css";
import LoadCat from "./components/LoadCat";
import FavCat from "./components/FavCat";

function App() {
  const storedItem = JSON.parse(localStorage.getItem("favCats") || "");
  const [favCats, setFavCats] = useState<any[]>(storedItem);
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

  useEffect(() => {
    localStorage.setItem("favCats", JSON.stringify(favCats));
  }, [favCats]);

  return (
    <div className="App">
      <h1 className="text-center m-8 text-4xl font-bold text-slate-800 tracking-wide">
        {name}
      </h1>
      <div className="container px-8 mb-16 xl:px-40 flex flex-col lg:flex-row justify-between">
        <LoadCat addFavCat={addFavCat} />
        <FavCat favCats={favCats} deleteFavCat={deleteFavCat} />
      </div>
    </div>
  );
}

export default App;
