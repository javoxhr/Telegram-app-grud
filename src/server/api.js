import query from "./query"
import server from "./server"

export default {
    getproducts() {
        return server("/v1/products")
    }
}