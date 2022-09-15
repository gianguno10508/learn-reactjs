import '../../font-awesome/all.css';
import '../../styles/home_body.css';
import Banner from './home_page/Banner';
import Session_1 from './home_page/Session_1';
import Session_2 from './home_page/Session_2';
import Session_3 from './home_page/Session_3';
import Session_4 from './home_page/Session_4';
import Session_5 from './home_page/Session_5';
import Session_6 from './home_page/Session_6';

function Home() {
  return (
    <div className="page-home">
      <Banner />
      <Session_1 />
      <Session_2 />
      <Session_3 />
      <Session_4 />
      <Session_5 />
      <Session_6 />
    </div>
  );
}

export default Home;