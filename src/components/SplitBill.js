import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [billPaidBy, setBillPaidBy] = useState("you");
  const paidByFriend = bill ? bill - myExpense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !myExpense) return;

    onSplitBill(billPaidBy === "you" ? paidByFriend : -myExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♂️ Your expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense:</label>
      <input type="number" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={billPaidBy}
        onChange={(e) => setBillPaidBy(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button className="button" type="submit">
        Split Bill
      </Button>
    </form>
  );
}
