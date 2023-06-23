import { useState } from "react";

import Button from "./Button";

export default function AddFriend({ onSetFriendsList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleNewFriend(e) {
    e.preventDefault();
    if (name.trim().length === 0 || image.trim().length === 0) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    };

    onSetFriendsList(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <div className="sidebar">
      <form className="form-add-friend" onSubmit={handleNewFriend}>
        <label htmlFor="name">🧑‍🤝‍🧑Friend name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image">🌄 Image URL</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button className="button" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}
