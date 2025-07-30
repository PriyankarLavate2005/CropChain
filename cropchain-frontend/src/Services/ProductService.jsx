import api from './api';

const productService = {
  getAllProducts: async (filters = {}) => {
    const queryString = new URLSearchParams(filters).toString();
    const response = await api.get(`/products?${queryString}`);
    return response.data;
  },

  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  createProduct: async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
  },

  updateProduct: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

  getFarmerProducts: async (farmerId) => {
    const response = await api.get(`/farmers/${farmerId}/products`);
    return response.data;
  },

  searchProducts: async (query) => {
    const response = await api.get(`/products/search?q=${query}`);
    return response.data;
  }
};

export default productService;