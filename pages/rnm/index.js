import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const allCharacters = [];
        for (let i = 1; i <= 5; i++) { // Fetch first 5 pages (100 characters total)
          const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`);
          allCharacters.push(...response.data.results);
        }
        setCharacters(allCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <Link href={`/rnm/${character.id}`} key={character.id}>
          <div className="bg-white rounded-lg shadow-lg cursor-pointer">
            <img src={character.image} alt={character.name} className="w-full h-auto" />
            <h2 className="text-xl font-bold text-center mt-2">{character.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
