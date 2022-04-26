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
import NewsCard from "./components/NewsCard";


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
        return (
            <Fragment>
                <Header/>
                <BlockList header={<ListHeader header_text="важные новости" link_text="Все новости"/>}
                           list={<ListSlider
                               item={<NewsCard news={news}/>}
                           />}
                           className = "news"
                />
                <BlockList header={<ListHeader header_text="блог" link_text="Все статьи"/>}
                           list={<ListSlider
                               item = {<NewsCard news = {news}/>}
                           />}
                           className="blog"
                />
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
