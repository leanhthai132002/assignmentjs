import Footer from "../components/footer";
import Header from "../components/header";
const ProductPage = {
    render() {
        return /* html */`
        ${Header.render()}
        <h1>Product</h1>
        ${Footer.render()}
            `;
    },
};
export default ProductPage;