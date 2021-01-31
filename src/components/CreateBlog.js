import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Dan");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const clearForm = () => {
    setTitle("");
    setBody("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsSubmitted(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsSubmitted(false);
      clearForm();
      history.push("/");
      alert("blog added");
    });
  };

  return (
    <div className="create">
      <form onSubmit={submitForm}>
        <div>
          <label>Blog Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Blog Body: </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label>Blog Author: </label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Dan">Dan</option>
            <option value="Yumna">Yumna</option>
          </select>
        </div>
        {!isSubmitted && <button type="submit">Add Blog</button>}
        {isSubmitted && (
          <button type="submit" disabled>
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
