import axios from "axios";


const API_URL="http://localhost:5000";


export async function fetchPromedioValorPorCategoria() {
    const response = await axios.get(`${API_URL}/promedio-valor-por-categoria`);
    return response.data.data;
}

export async function fetchProductosPorMarca() {
    const response = await axios.get(`${API_URL}/productos-por-marca`);
    return response.data.data;
}
