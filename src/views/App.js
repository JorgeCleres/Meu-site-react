import './App.css';
import Menu from '../components/Menu'
import { BrowserRouter as Route } from 'react-router-dom';
import Content from '../components/Content'

export default props => {

  return (
    <div className="App">
      <Route>
        <Menu></Menu>
        <Content></Content>
      </Route>
    </div>
  )
}
