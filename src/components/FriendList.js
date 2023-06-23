import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelected={onSelected}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
