import { useState } from "react";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [productForm, setProductForm] = useState({ name: "", price: "", description: "" });
  const [userForm, setUserForm] = useState({ name: "", email: "", role: "user" });

  // Handlers for products
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  const addProduct = () => {
    setProducts((prev) => [...prev, { ...productForm, id: Date.now() }]);
    setProductForm({ name: "", price: "", description: "" });
  };

  const editProduct = (id) => {
    const productToEdit = products.find((p) => p.id === id);
    setProductForm(productToEdit);
    deleteProduct(id);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Handlers for users
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const addUser = () => {
    setUsers((prev) => [...prev, { ...userForm, id: Date.now() }]);
    setUserForm({ name: "", email: "", role: "user" });
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Product Management Section */}
      <div className="mb-8 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
        <div className="grid gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={productForm.name}
            onChange={handleProductChange}
            placeholder="Product Name"
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="price"
            value={productForm.price}
            onChange={handleProductChange}
            placeholder="Product Price"
            className="p-3 border rounded"
          />
          <textarea
            name="description"
            value={productForm.description}
            onChange={handleProductChange}
            placeholder="Product Description"
            className="p-3 border rounded"
          ></textarea>
          <button
            onClick={addProduct}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>

        <ul>
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center mb-3 border p-3 rounded">
              <div>
                <p className="font-bold">{product.name}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </div>
              <div>
                <button
                  onClick={() => editProduct(product.id)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* User Management Section */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <div className="grid gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={userForm.name}
            onChange={handleUserChange}
            placeholder="User Name"
            className="p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            value={userForm.email}
            onChange={handleUserChange}
            placeholder="User Email"
            className="p-3 border rounded"
          />
          <select
            name="role"
            value={userForm.role}
            onChange={handleUserChange}
            className="p-3 border rounded"
          >
            <option value="user">Normal User</option>
            <option value="astrologer">Astrologer</option>
          </select>
          <button
            onClick={addUser}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </div>

        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex justify-between items-center mb-3 border p-3 rounded">
              <div>
                <p className="font-bold">{user.name}</p>
                <p>{user.email}</p>
                <p className="italic">Role: {user.role}</p>
              </div>
              <div>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
