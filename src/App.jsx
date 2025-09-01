import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './Components/Header/Header.jsx';
import CoreConcepts from './Components/CoreComponents.jsx';
import TabButtons from './Components/TabButtons';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  //let tabContent="Please Click a Button";
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
    
  } 
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* <CoreConcepts title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          {CoreConcepts.map((concept)=>(
            <CoreConcepts key={concept.title} {...concept} />
          ))}
        </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons 
              isSelected ={selectedTopic == "components"} 
              onSelect={()=>handleSelect('components')}>
              Components</TabButtons>
            <TabButtons 
              isSelected ={selectedTopic == "jsx"}
              onSelect={()=>handleSelect('jsx')}>
              JSX</TabButtons>
            <TabButtons
              isSelected ={selectedTopic == "props"}
              onSelect={()=>handleSelect('props')}>
              Props</TabButtons>
            <TabButtons
              isSelected ={selectedTopic == "state"}
              onSelect={()=>handleSelect('state')}>
              State</TabButtons>
          </menu>
          {/* Here we cam use js statemnets inside JSX using {} and () */}
          {!selectedTopic?(<p>Please Select a topic</p>):(<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)}
          
        </section>
        
      </main>
    </div>
  );
}

export default App;
