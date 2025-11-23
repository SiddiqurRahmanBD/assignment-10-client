import React, { useState } from 'react';

const AddFood = () => {
     const [loading, setLoading] = useState(false);

     const imgbbKey = import.meta.env.VITE_IMGBB_KEY;

     const handleAddFood = async (e) => {
       e.preventDefault();
       setLoading(true);

       const form = e.target;
       const foodName = form.foodName.value;
       const quantity = form.quantity.value;
       const pickupLocation = form.pickupLocation.value;
       const expireDate = form.expireDate.value;
       const notes = form.notes.value;
       const imageFile = form.foodImage.files[0];

       // 1️⃣ Upload image to imgbb
       const imgForm = new FormData();
       imgForm.append("image", imageFile);

       const uploadRes = await fetch(
         `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
         {
           method: "POST",
           body: imgForm,
         }
       );

       const uploadedImg = await uploadRes.json();
       const foodImage = uploadedImg.data.url;

       // 2️⃣ Prepare data for MongoDB
       const newFood = {
         foodName,
         foodImage,
         quantity,
         pickupLocation,
         expireDate,
         additionalNotes: notes,
         food_status: "Available", // default
         donatorName: user.displayName,
         donatorEmail: user.email,
         donatorImage: user.photoURL,
         createdAt: new Date(),
       };

       // 3️⃣ Send data to backend
       const res = await fetch("http://localhost:5000/foods", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newFood),
       });

       const data = await res.json();

       if (data.insertedId) {
         toast.success("Food added successfully!");
         form.reset();
       }

       setLoading(false);
     };
    return (
      <div className="max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add New Food</h2>

        <form onSubmit={handleAddFood}>
          {/* Food Name */}
          <label className="block mb-2">Food Name</label>
          <input
            type="text"
            name="foodName"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Food Image */}
          <label className="block mb-2">Food Image (via imgbb)</label>
          <input
            type="file"
            name="foodImage"
            accept="image/*"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Quantity */}
          <label className="block mb-2">Food Quantity (e.g., 5 plates)</label>
          <input
            type="text"
            name="quantity"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Pickup Location */}
          <label className="block mb-2">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Expire Date */}
          <label className="block mb-2">Expire Date</label>
          <input
            type="date"
            name="expireDate"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Notes */}
          <label className="block mb-2">Additional Notes</label>
          <textarea
            name="notes"
            rows="3"
            className="w-full border p-2 mb-4 rounded"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded w-full"
          >
            {loading ? "Uploading..." : "Add Food"}
          </button>
        </form>
      </div>
    );
};

export default AddFood;