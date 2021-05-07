import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './Pages/home'
import blog from './Pages/blog'



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blog" component={blog}/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
