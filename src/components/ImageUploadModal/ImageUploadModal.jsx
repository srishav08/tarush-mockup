import React, { useState } from "react";
import { Button } from "../ui/button/Index";
import "./ImageUploadModal.css";

export default function ImageUploadModal({ onClose, onUpload }) {
  const [images, setImages] = useState([{ id: 1, file: null }]);

  const handleImageChange = (index, file) => {
    const updated = images.map((img, idx) =>
      idx === index ? { ...img, file } : img
    );
    setImages(updated);
    onUpload();
  };

  const addImageField = () => {
    setImages([...images, { id: images.length + 1, file: null }]);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 className="modal-title">Upload Kitchen's Pictures</h3>
        <div className="modal-form">
          {images.map((img, idx) => (
            <div key={img.id} style={{ marginBottom: '1rem' }}>
              <label className="block mb-1 font-medium">Image {idx + 1}</label>
              <input
                type="file"
                accept="image/*"
                className="modal-input"
                onChange={(e) => handleImageChange(idx, e.target.files[0])}
              />
              {img.file && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: {img.file.name}
                </p>
              )}
            </div>
          ))}
          <Button className="w-full text-lg py-3" onClick={addImageField}>Add More</Button>
        </div>
      </div>
    </div>
  );
}
