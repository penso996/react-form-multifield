// Main.jsx

import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        titolo: "Introduzione a JavaScript",
        autore: "Mario Rossi",
        contenuto: "JavaScript è un linguaggio di programmazione utilizzato per creare interattività nei siti web.",
        categoria: "Programmazione"
    },
    {
        id: 2,
        titolo: "I benefici della meditazione",
        autore: "Laura Bianchi",
        contenuto: "La meditazione aiuta a ridurre lo stress e migliorare la concentrazione.",
        categoria: "Benessere"
    },
    {
        id: 3,
        titolo: "Viaggiare in Giappone: cosa sapere",
        autore: "Giovanni Verdi",
        contenuto: "Il Giappone offre un mix unico di tradizione e modernità. Ecco alcuni consigli per il tuo viaggio.",
        categoria: "Viaggi"
    },
    {
        id: 4,
        titolo: "Guida all'alimentazione sana",
        autore: "Chiara Neri",
        contenuto: "Una dieta equilibrata è essenziale per mantenere la salute e il benessere.",
        categoria: "Salute"
    },
    {
        id: 5,
        titolo: "Come migliorare la produttività",
        autore: "Stefano Gialli",
        contenuto: "Organizzare il tempo e ridurre le distrazioni può aumentare significativamente la produttività.",
        categoria: "Crescita Personale"
    }
];

export default function Main() {
    return (
        <main>
            <h1>Blog</h1>
        </main>
    );
}