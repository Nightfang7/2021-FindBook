import products from "../json/products.json"
import newest from "../json/Newest.json"
import taiwan from "../json/Taiwanproduct.json"
import topproduct from "../json/Topproduct.json"

export const getJSON = (url) => {
    switch (url) {
        case "/store":
            return products;
        case "/store/newest":
            return newest;
        case "/store/taiwan":
            return taiwan;
        case "/store/topproduct":
            return topproduct;
        default:
        return products;
    }
};