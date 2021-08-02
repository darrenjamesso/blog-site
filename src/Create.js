import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const redirect = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': "application/json "},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            redirect.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add A New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) =>setTitle(e.target.value)}
                />
                <label>Content:</label>
                <textarea 
                required
                value={content}
                onChange={(e) =>setContent(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select
                value={author}
                onChange={(e) =>setAuthor(e.target.value)}
                >
                    <option value="Luffy">Luffy</option>
                    <option value="Zoro">Zoro</option>
                    <option value="Nami">Nami</option>
                    <option value="Sanji">Sanji</option>
                    <option value="Usopp">Usopp</option>
                </select>
                { !isPending && <button>Add Blog</button> } 
                { isPending && <button>Adding blog...</button> } 
            </form>
        </div>
    );
}
 
export default Create;