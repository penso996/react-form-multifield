// Main.jsx

import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        author: "Mario Rossi",
        content: "JavaScript è un linguaggio di programmazione utilizzato per creare interattività nei siti web.",
        category: "Programmazione"
    },
    {
        id: 2,
        title: "I benefici della meditazione",
        author: "Laura Bianchi",
        content: "La meditazione aiuta a ridurre lo stress e migliorare la concentrazione.",
        category: "Benessere"
    },
    {
        id: 3,
        title: "Viaggiare in Giappone: cosa sapere",
        author: "Giovanni Verdi",
        content: "Il Giappone offre un mix unico di tradizione e modernità. Ecco alcuni consigli per il tuo viaggio.",
        category: "Viaggi"
    },
    {
        id: 4,
        title: "Guida all'alimentazione sana",
        author: "Chiara Neri",
        content: "Una dieta equilibrata è essenziale per mantenere la salute e il benessere.",
        category: "Salute"
    },
    {
        id: 5,
        title: "Come migliorare la produttività",
        author: "Stefano Gialli",
        content: "Organizzare il tempo e ridurre le distrazioni può aumentare significativamente la produttività.",
        category: "Crescita Personale"
    }
];

export default function Main() {

    // useState to handle blogPosts
    const [posts, setPosts] = useState(blogPosts);


    // RETURN
    return (
        <main>

            {/* post form */}
            <div>

            </div>

            {/* post container */}
            <div>
                {posts.map((post) => (
                    <div className="post-container" key={post.id}>
                        <h3>{post.title}</h3>
                        <h4>{post.author}</h4>
                        <p>{post.content}</p>
                        <h6>{post.category}</h6>
                    </div>
                ))}
            </div>

        </main>
    );
}