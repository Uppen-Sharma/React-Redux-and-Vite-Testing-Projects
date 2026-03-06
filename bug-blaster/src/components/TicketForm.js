import React, { useState, useEffect } from "react";

export default function TicketForm({ dispatch, editingTicket }) {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Priority, setPriority] = useState("1");

  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.Title);
      setDesc(editingTicket.Desc);
      setPriority(editingTicket.Priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const priorityLables = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      Title,
      Desc,
      Priority,
    };

    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });

    if (editingTicket) {
      dispatch({ type: "CLEAR_EDITING_TICKET" });
    }

    clearForm();
  };

  const handleCancleEdit = () => {
    dispatch({ type: "CLEAR_EDITING_TICKET" });

    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setDesc("");
    setPriority("1");
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={Title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={Desc}
          className="form-input"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend align="center">Priority</legend>
        {Object.entries(priorityLables).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={Priority === value}
              className="priority-input"
              onChange={(e) => setPriority(e.target.value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
      {editingTicket && (
        <button className="button" onClick={handleCancleEdit}>
          Cancle Edit
        </button>
      )}
    </form>
  );
}
