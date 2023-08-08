import React, { useState } from 'react';

export default function EditableField({ label, type, value, onChange, isEditing = false }) {
  const LabelTag = isEditing ? 'label' : 'p';
  return (
    <div className="info">
      <LabelTag className="subtitle">{label}</LabelTag>
      {isEditing ? <input className="input--editForm" type={type} value={value} onChange={onChange} /> : <div>{value}</div>}
    </div>
  );
}
