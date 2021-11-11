const API_SERVER = "http://localhost:8081";

export const getProducts = async () => fetch(`${API_SERVER}/products`).then(res => res.json());

export const getProductById = async (id) => fetch(`${API_SERVER}/products/${id}`).then(res => res.json());

export const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
