import data from "../data";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
        ${Header.render()}
            <h1>${result.title}</h1>
            <img src="${result.img}" />    
            <p>${result.desc}</p>
            ${Footer.render()}
        `;
    },
};
export default DetailNewsPage;