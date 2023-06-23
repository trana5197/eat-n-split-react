import { useState } from "react";
import AddFriend from "./AddFriend";
import FriendList from "./FriendList";
import SplitBill from "./SplitBill";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [displayAddFriend, setDisplayAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selected, setSelected] = useState(null);

  function handleDisplayAddFriend() {
    setDisplayAddFriend((curState) => !curState);
  }

  function handleAddFriend(friend) {
    setFriendsList((friends) => [...friends, friend]);
  }

  function handleSelected(friend) {
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
  }

  function handleSplitBill(value) {
    setFriendsList((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friendsList}
          onSelected={handleSelected}
          selectedFriend={selected}
        />
        {displayAddFriend && <AddFriend onSetFriendsList={handleAddFriend} />}

        <Button className="button" onClick={handleDisplayAddFriend}>
          {displayAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selected && (
        <SplitBill selectedFriend={selected} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}
