import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Posts from './components/posts';

function App() {
  return (
    <main className="App">
      <Navbar />
      <div className="container">
        <Searchbar />
        <Posts />
      </div>
    </main>
  );
}

export default App;
