import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButtons from "./TabButtons";
import Section from "./Section";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
    //let tabContent="Please Click a Button";
    function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
      //console.log(selectedTopic);
      
    } 
    return(
        <Section title="Exapmles" id="examples">
         
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
          
        </Section>
    );
}