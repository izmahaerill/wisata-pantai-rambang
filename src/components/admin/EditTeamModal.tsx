import { useState } from "react";

export default function EditTeamModal({ team, onClose, onSave }: any) {
  const [name, setName] = useState(team.name);
  const [role, setRole] = useState(team.role);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);

    const res = await fetch(`/api/team/${team.id}`, {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      onSave(); // refresh data
    } else {
      alert(data.error);
    }
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Edit Team</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="KETUA">KETUA</option>
          <option value="ANGGOTA">ANGGOTA</option>
          {/* Tambah sesuai enum Role */}
        </select>
        <button type="submit">Save</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
