function Food({name, picture}) {
  return (
    <div>
    <h1>I like {name}</h1>
    <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDrNtl4pG_zepTDko3IUhgHaHa%26pid%3DApi&f=1'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vhL7flr5LCRcKWCNr95t3wHaD4%26pid%3DApi&f=1'
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UzL1TiB5iNdl90e3Dq_X7AHaD4%26pid%3DApi&f=1'
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DxkwyyLp8y5OyBlvX2xbXwHaEO%26pid%3DApi&f=1'
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7qWCjTMnbwtqMGiRErcH3gHaE-%26pid%3DApi&f=1'
  }
];


function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food key={dish.name} name={dish.name} picture={dish.image} />
      )}
     </div>
  );
}

export default App;
