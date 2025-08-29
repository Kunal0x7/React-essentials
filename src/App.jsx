import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const randomreact=["Fundamental","Core","Crucial"];
function getRandomReactConcept() {
  const randomIndex = Math.floor(Math.random() * randomreact.length);
  return randomreact[randomIndex];
}

function Header() {
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getRandomReactConcept()} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
function CoreConcepts(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <title>{props.title}</title>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>

        </section>
        
      </main>
    </div>
  );
}

export default App;
