import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import AboutProduct from "./pages/product";
import DetailNewsPage from "./pages/detail";
import Header from "./components/header";
import Footer from "./components/footer";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(AboutProduct.render());
    },
    "/news/:id": (value) => {
        print(DetailNewsPage.render(value.data.id));
    },
    "/signin": () => {
        print(SigninPage.render());
    },
    "/signup": () => {
        print(SignupPage.render());
    },

});
router.resolve();