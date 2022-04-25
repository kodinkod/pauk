import './index.css';
import Block_List from "./components/Block_List";
import News_header from "./components/news_header";
import ListSlider from "./components/List-Slider";
import {Fragment} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
    return (
        <Fragment>
            <Header/>
            <Block_List header={<News_header header_text="важные новости" link_text="Все новости"/>}
                        list={<ListSlider/>}/>
            <Footer/>
        </Fragment>
    );
}

export default App;
