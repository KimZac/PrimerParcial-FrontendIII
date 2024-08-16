import React, { useState } from "react";
import Card from "./Card";
import Estilos from "../Styles/Form.module.css"

const Form = () => {
    const [libro, setLibro] = useState("");
    const [autor, setAutor] = useState("");
    const [isbn, setIsbn] = useState("");

    const [error, setError] = useState(false);
    const [showCard, setShowCard] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validaciones
        if (libro.trim().length >= 3 && autor.trim().length >= 3 && isbn.trim().length >= 6) {
            setShowCard(true);
            setError(false);
        } else {
            setError(true);
            setShowCard(false);
        }
    };

    const reset = () => {
        setLibro("");
        setAutor("");
        setIsbn("");
        setError(false);
        setShowCard(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Elige tu libro favorito</h1>
                <label>Título del libro: </label>
                <input
                    type="text"
                    value={libro}
                    onChange={(e) => setLibro(e.target.value)}
                />
                <label>Autor del libro: </label>
                <input
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
                <label>ISBN del libro: </label>
                <input
                    type="text"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                />
                <button type="submit">Enviar</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>

            {error && (
                <h4 style={{ color: "red" }}>
                    Error: Por favor chequea que la información sea correcta.
                </h4>
            )}

            {showCard && (
                <Card libro={libro} autor={autor} isbn={isbn} />
            )}
        </div>
    );
};

export default Form;
