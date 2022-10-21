import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "../../src/style/Search.css";

function Search() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  const getAltexItem = async (query) => {
  
    const response = await fetch(encodeURI(`http://localhost:8080/https://fenrir.altex.ro/v2/catalog/search/${query}?size=1`));
    const item = (await response.json()).products[0];

    return {
      id: item.id,
      name: item.name,
      price: item.price,
      source: "Altex"
    };
  }

  const getMediaGalaxyItem = async (query) => {
    const response = await fetch(encodeURI(`http://localhost:8080/https://cerberus.mediagalaxy.ro/v2/catalog/search/${query}?size=1`));
    const item = (await response.json()).products[0];

    return {
      id: item.id,
      name: item.name,
      price: item.price,
      source: "Media Galaxy"
    };
  }

  const getEmagItem = async (query) => {
    const response = await fetch(encodeURI(`http://localhost:8080/https://www.emag.ro/search/${query}`));
    const text = await response.text();

    const itemArrayString = /EM\.listingGlobals\.items = ((.|\n)+)var filters = {}/.exec(text)[1];
    const items = eval(itemArrayString);
    const item = items[0];

    const priceRegex = new RegExp(`data-productid="${item.id}".+price&quot;:(\\d+),`);
    const price = priceRegex.exec(text)[1];

    return {
      id: item.id,
      name: item.name,
      price: price,
      source: "Emag"
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      const apiResults = [];

      apiResults.push(await getAltexItem(query));
      apiResults.push(await getMediaGalaxyItem(query));
      apiResults.push(await getEmagItem(query));

      setResults(apiResults);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="searchTitle"><em>{query}</em></div>
      <div className="resultsList">
        {results.map(result => <div className="result" key={result.source + result.id}>
          <b>{`${result.source}`}</b> {`: ${result.name} - ${result.price} lei`}</div>)}
      </div>
     
        
    </div>
  );
}

export default Search;
