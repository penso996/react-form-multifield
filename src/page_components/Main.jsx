// Main.jsx
import { useState } from "react";


// Initial posts array
const initialBlogPosts = [
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

// Initial empty form
const initialFormData = {
    title: "",
    author: "",
    content: "",
    category: "",
    available: false,
};


export default function Main() {

    // useState to handle blogPosts
    const [posts, setPosts] = useState(initialBlogPosts);
    // FUNCTION to remove a post from ID (utilized for the button)
    function removePost(id) {
        const updatedBlogPost = posts.filter(post => post.id !== id);
        setPosts(updatedBlogPost);
    }

    // useState to handle form
    const [formData, setFormData] = useState(initialFormData);
    // FUNCTION to handle form data
    function handleFormData(e) {
        // handle checkbox or input value
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        // use setFormData with form input
        setFormData((currentFormData) => (
            {
                ...currentFormData,
                [e.target.name]: value,
            }));
    }

    // RETURN
    return (
        <main>

            {/* post form */}
            <div>
                <h3>Inserisci un nuovo articolo</h3>

                <form>
                    {/* form for blog title */}
                    <input
                        type="text"
                        name="title"
                        onChange={handleFormData}
                        value={formData.title}
                        placeholder="Title"
                    />
                    {/* form for blog author */}
                    <input
                        type="text"
                        name="author"
                        onChange={handleFormData}
                        value={formData.author}
                        placeholder="Author"
                    />
                    {/* form for blog content */}
                    <input
                        type="text"
                        name="content"
                        onChange={handleFormData}
                        value={formData.content}
                        placeholder="Content"
                    />
                    {/* form for blog category */}
                    <input
                        type="text"
                        name="category"
                        onChange={handleFormData}
                        value={formData.category}
                        placeholder="Category"
                    />
                    {/* checkbox for availability */}
                    <label htmlFor="available">Disponibile</label>
                    <input
                        type="checkbox"
                        name="available"
                        checked={formData.available}
                        onChange={handleFormData}
                        id="available"
                    />

                </form>

            </div>

            {/* post container */}
            {posts.length === 0 ? (<div><h3>No posts to show</h3></div>) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <h5>{post.author}</h5>
                        <p>{post.content}</p>
                        <h6>{post.category}</h6>
                        <button onClick={() => removePost(post.id)}>Delete</button>
                    </div>
                ))
            )}

        </main>
    );
}