import './App.css'
import NavigationBar from './NavigationBar'

function App() {
  return (
    <>
      {/*
      Header, here is located the navbar
      */}
      <header>
        <NavigationBar/>
      </header>

      {/*
      Main, here will be located the Hero
      Highlights, testimonials and about sections
      */}
      <main>
        {/*Hero section*/}
        <section className='HeroSection'>
        </section>
        
        {/*Highlights section*/}
        <section>
        </section>

        {/*Testimonials section*/}
        <section>
        </section>

        {/*About section*/}
        <section>
        </section>
      </main>

      {/*
      Footer, what else can I say?
      contains links and other search things
      */}
      <footer>

      </footer>
    </>
  )
}

export default App
