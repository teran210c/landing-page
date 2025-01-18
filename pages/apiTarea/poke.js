import axios from "axios";
import { useState, useEffect } from "react";  
import Link from "next/link";

export default function AapiTarea to piTarea () {
    const [pokemons, setPokemons]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        const fetchPokemons=async () =>{
            try{
                 const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
                 setPokemons(response.data.results)
            } catch (error) {
                console.error("Error al traer los datos", error)
            } finally {
                setLoading(false)
            }            
        } 
        fetchPokemons()

    },[]);

    if(loading) return<div>Cargando...</div>;

    return(
        <div className="grid grid-cols-2 md:gri-cols-3 lg:grid-cols-4 gap-4">
            {pokemons.map ((pokemon, index)=>(
            <Link href={`/pokemon/${index+1}`} key={pokemon.name}>
                <div
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt={pokemon.name}/>
                    <h2 className="text-xl text-black font-semibold capitalize text-center mt-2">
                        {pokemon.name}

                    </h2>

                </div>

            </Link>
        ))}
        </div>
    )

}