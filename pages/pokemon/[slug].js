import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    const router=useRouter();
    const {slug}=router.query;

    useEffect(()=> {
        const fetchPokemon= async () => {
            if(!slug) return;
            try {
                setLoading(true)
                const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}`)
                setPokemon(response.data)

            } catch (error) {
                console.error("error trayendo el pokemon")
            }finally {
                setLoading(false)
            }

        };
        fetchPokemon()

    },[slug]);
    if(loading) return <div>Cargando...</div>
    if(!pokemon) return <div>Pokemon no encontrado</div>

    return(
        <div className="container mx-auto p-4">
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
                <h1 className="text-3x1 font-bold capitalize mb-4">
                    {pokemon.name}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <img 
                        src={pokemon.sprites.other["official-artwork"].front_default} 
                        alt={pokemon.name}
                        className="w-full h-full"
                        />
                    </div>
                    <div>
                        <div className="mb-2">
                            <h2 className="text-xl font-semibold mb-2">Estadisticas</h2>
                            {pokemon.stats.map ((stat) =>
                                <div onKeyUpCapture={(stat.stat.name)} className="mb-2">
                                    <p className="capitalaze text-black">
                                        {stat.stat.name} : {stat.base_stat}

                                    </p>

                                </div>

                            )              
                            }
                            
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}