export const getUser = () => {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : false
};
export const getProducts = () => {
    return localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
};
export const getDproducts = () => {
    return localStorage.getItem("dproducts") ? JSON.parse(localStorage.getItem("dproducts")) : false
};


export const getBasket = () => {
    return localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []
}