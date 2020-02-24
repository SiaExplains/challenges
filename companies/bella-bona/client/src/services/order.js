import http from './http-services';

const API_ROUTE = `http://localhost:3006/api/orders/`;

export function getAllOrders() {
    return http.get(API_ROUTE, http.config);
}

// export function getAnArticle(id) {
//     return http.get(`${API_ARTICLES}${id}`, http.config);
// }

// export function deleteAnArticle(id) {
//     return http.delete(`${API_ARTICLES}${id}`, http.tokenConfig());
// }

// export function addAnArticle(data) {
//     return http.post(`${API_ARTICLES}`, data, http.tokenConfig());
// }

// export function updateAnArticle(data) {
//     return http.put(`${API_ARTICLES}`, data, http.tokenConfig());
// }
