import { useState } from "react";
import { notices as initial } from "../data";

function PostNotice() {
  const [list, setList] = useState(initial);
  const [title, setTitle] = useState("");

  const post = (e) => {
    e.preventDefault();
    setList([{ title, date: new Date().toDateString() }, ...list]);
    setTitle("");
  };

  return (
    <div>
      <h1 className="text-center text-purple-900 mb-6 font-bold font-serif text-xl">NOTICES</h1>
      <form onSubmit={post} className="flex gap-3 mb-6 max-w-xl">
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a notice for your students..."
          className="border border-gray-300 rounded-lg p-2 flex-1 bg-white"
        />
        <button className="bg-blue-950 hover:bg-blue-800 text-white px-4 rounded-lg">Post</button>
      </form>
      <div className="bg-white rounded-lg shadow max-w-xl">
        {list.map((n, i) => (
          <div key={i} className="border-b p-3 text-sm">
            <p>{n.title}</p>
            <p className="text-xs text-gray-500">{n.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostNotice;
