import './App.css';
import News from './components/News'
import Ad from './components/Ad'
import Search from './components/Search'
import Action from './components/Action'

function App() {
  return(
    <main>
      <div className="News_and_Ad">
        <News/>
        <Ad />
      </div>
      <Search />
      <Ad/>
      <Action/>
    </main>
  )
}

export default App;
