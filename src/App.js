import './App.scss'
import Header from './Components/Header'
import MostViewedPost from './Components/MostViewedPost'
import Posts from './Components/Posts'

function App() {
  return (
    <div className="App">
      <Header />
      <MostViewedPost />
      <Posts />
      <footer>
        <span className="text-tertiary">Developed by</span>
        Angel Berlanga
      </footer>
    </div>
  );
}

export default App;
