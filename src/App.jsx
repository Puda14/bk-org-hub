import './App.css';
import MainSection from './components/MainSection'
import Footer from './layout/Footer';
import Header from './layout/Header'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MainSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;
