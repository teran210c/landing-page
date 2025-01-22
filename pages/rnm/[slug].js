import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function CharacterDetails() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { slug } = router.query; // Obtén el ID del personaje desde la URL

    useEffect(() => {
        const fetchCharacter = async () => {
            if (!slug) return;
            try {
                setLoading(true);
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${slug}`);
                setCharacter(response.data);
            } catch (error) {
                console.error("Error trayendo el personaje:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacter();
    }, [slug]);

    if (loading) return <div>Cargando...</div>;
    if (!character) return <div>Personaje no encontrado</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-4">{character.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Imagen del personaje */}
                    <div>
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    {/* Detalles del personaje */}
                    <div>
                        <p className="text-lg">
                            <strong>Status:</strong> {character.status}
                        </p>
                        <p className="text-lg">
                            <strong>Species:</strong> {character.species}
                        </p>
                        <p className="text-lg">
                            <strong>Gender:</strong> {character.gender}
                        </p>
                        <p className="text-lg">
                            <strong>Origin:</strong> {character.origin.name}
                        </p>
                        <p className="text-lg">
                            <strong>Location:</strong> {character.location.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
