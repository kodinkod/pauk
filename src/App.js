import './index.css';
import BlockList from "./components/BlockList";
import ListHeader from "./components/StandardBlockHeader";
import ListSlider from "./components/List-Slider";
import {Fragment} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChiefSlider from "./utils/slider";
import React from "react";
import img_1 from "./assets/images/news_1.jpg"
import img_2 from "./assets/images/blog_1.jpg"
import NewsCard from "./components/NewsCard";
import Card from "./components/Card";
import ArticleCard from "./components/ArticleCard";
import EmailForm from "./components/EmailForm";
import WhyUs from "./components/WhyUs";


class App extends React.Component {
    componentDidMount() {
        const elms = document.querySelectorAll('.slider');
        for (let i = 0, len = elms.length; i < len; i++) {
            new ChiefSlider(elms[i], {
                loop: false,
                autoplay: false,
                interval: 5000,
                swipe: true,
                refresh: true
            })
        }
    }

    render() {
        let news = {
            img: img_1,
            date: "18 марта, 2021",
            title: "Зимовка в Regent Porto Montenegro",
            href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

        }
        let article = {
            img: img_2,
            date: "18 марта, 2021",
            title: "Зимовка в Regent Porto Montenegro",
            href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            views: "3228",
        }
        return (
            <Fragment>
                <Header/>
                <BlockList header={<ListHeader header_text="важные новости" link_text="Все новости"/>}
                           list={<ListSlider
                               item={<NewsCard news={news}/>}
                           />}
                           className = "news"
                />
                <BlockList header={<ListHeader header_text="блог" link_text="Все статьи">
                    <svg className="plane-svg d-none d-lg-inline" width="306" height="193" viewBox="0 0 306 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M12.5007 174C19.5008 51 112.587 52.5699 138.341 54.4457C164.094 56.3215 190.977 85.3932 182.543 98.4543C174.109 111.516 154.428 107.013 143.543 88.2943C129.992 64.991 133.492 55.8131 142.26 35.5633C151.029 15.3136 199.539 -6.23422 231.331 3.2035C263.124 12.6412 288.501 29.5005 305.501 59.5" stroke="#767676" strokeLinejoin="round" strokeDasharray="6 4"/>
                        <path d="M59.7155 59.5364L56.7406 72.8646L53.1257 75.1597C52.555 75.522 52.0604 76.0138 51.6825 76.6041L51.4486 77.013C51.1154 77.5317 51.1135 78.1758 51.4435 78.6955C51.7735 79.2153 52.3572 79.4875 52.942 79.4099L53.4634 79.3663C54.1329 79.2781 54.7875 79.0402 55.359 78.6773L58.9739 76.3822L72.2981 79.3582C72.9767 79.5097 73.6732 79.3884 74.2606 79.0154L75.2912 78.3611C75.4521 78.2589 75.544 78.0772 75.5311 77.8879C75.5192 77.6981 75.4045 77.5291 75.2306 77.4495L64.6586 72.5336C65.9371 71.6071 66.9773 70.7912 68.2429 69.7976L69.539 68.7785L73.5276 70.566C73.689 70.6375 73.873 70.6243 74.0208 70.5305L74.9001 69.9722C75.0328 69.8879 75.1209 69.7468 75.1386 69.59C75.1566 69.4318 75.1017 69.2754 74.9906 69.1645L71.6793 65.8477L70.0862 61.4399C70.0731 61.4038 70.0565 61.3699 70.0364 61.3383C69.9733 61.2389 69.8785 61.1634 69.7649 61.1244C69.6147 61.0743 69.4495 61.094 69.3167 61.1783L68.4374 61.7366C68.2897 61.8304 68.1986 61.9919 68.1964 62.1672L68.1199 66.5356L66.6418 67.2779C65.206 67.9995 64.026 68.5932 62.6437 69.3562L62.6903 57.6984C62.6917 57.5062 62.5872 57.3319 62.422 57.2407C62.2555 57.1477 62.052 57.1535 61.8911 57.2557L60.8605 57.91C60.2731 58.2829 59.8664 58.8607 59.7155 59.5364Z" fill="#454545"/>
                        <path d="M24.39 169.325C23.2359 165.687 20.1967 162.725 16.4652 161.6C15.1572 161.206 13.8107 161 12.5027 161C9.82908 161 7.25166 161.806 5.09734 163.381C1.9042 165.669 0 169.325 0 173.188C0 175.85 0.865575 178.381 2.50055 180.5L12.5027 193L22.5049 180.5C24.9477 177.313 25.6402 173.244 24.39 169.325ZM12.5027 179.75C8.79039 179.75 5.7705 176.806 5.7705 173.188C5.7705 169.569 8.79039 166.625 12.5027 166.625C16.2151 166.625 19.235 169.569 19.235 173.188C19.235 176.806 16.2151 179.75 12.5027 179.75Z" fill="#454545"/>
                    </svg>

                </ListHeader>
                    }
                           list={<ListSlider
                               item = {<ArticleCard article = {article}/>}
                           />}
                           className="blog"
                />
                <EmailForm/>
                <WhyUs/>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
