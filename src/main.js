import Navigo from "navigo";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import Addnews from "./pages/admin/news/add";
import EditNews from "./pages/admin/news/edit.js";
import DetailNewsPage from "./pages/detail";
import HomePage from "./pages/home";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.getElementById("app").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/about": () => {
    print(AboutPage.render());
  },
  "/products": () => {
    print(ProductPage.render());
  },
  "/news/:id": (value) => {
    print(DetailNewsPage.render(value.data.id));
  },
  "/admin/dashboard": () => print(DashboardPage.render()),
  "/admin/news": () => print(AdminNewsPage.render()),
  "/admin/news/add": () => print(Addnews.render()),
  "/admin/news/edit/:id": ({ data }) => {
    const { id } = data;
    print(EditNews.render(id));
},
  "/signin": () => {
    print(SigninPage.render());
  },
  "/signup": () => {
    print(SignupPage.render());
  },
});
router.resolve();
