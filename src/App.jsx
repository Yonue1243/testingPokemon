import { useEffect, useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [pokeid, setPokeId] = useState("");
  const [habilidades, setHabilidades] = useState({});
  const [altura, setAltura] = useState("");
  const [sprite, setSprite] = useState({});
  const [pokeNombre, setPokeNombre] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNombre}`)
      .then((res) => res.json())
      .then((response) => {
        const { abilities, id, height, name, sprites } = response;
        setPokeId(id);
        setNombre(name);
        setHabilidades(abilities);
        setAltura(height);
        setSprite(sprites);
        console.log(response);
      });
  }, [pokeNombre]);

  const handlePokemonSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      {nombre && (
        <div className="diva">
          <section>
            <h1>
              El Pokémon es: {nombre} de ID: {pokeid}{" "}
            </h1>
            <h2>con una altura de: {altura} metros</h2>
            <div className="imagendiv">
              <img src={sprite.front_default} alt="imagen pokemon" />
            </div>

            <h3>
              Sus habiliades son: {habilidades[0]?.ability?.name} e{" "}
              {habilidades[1]?.ability?.name}
            </h3>
          </section>
        </div>
      )}

      <form action="submit">
        <input
          type="text"
          value={pokeNombre}
          onChange={(e) => setPokeNombre(e.target.value)}
        />
      </form>
    </main>
  );
}

export default App;
