import './index.css';
import Block from "./components/Block";
import Block_List from "./components/Block_List";
import News_header from "./components/news_header";
import ListSlider from "./components/List-Slider";

function App() {
  return (
        <Block_List header = {<News_header header_text = "важные новости" link_text = "Все новости"/>} list = {<ListSlider/>}/>
  );
}

export default App;
