

import { useState } from "react";
import Card from "./Cards.tsx";


type Animal = {
  name: string;
  image: string;
  count: number;
}

function SurveyPage() {
const [animals, setAnimals] = useState<Animal[]>([
  
  {
    name: "Mountain Lion",
    image: "/images/mountain-lion.jpg",
    count: 0,

  },
  {
    name: "Black Bear",
    image: "/images/black-bear.jpg",
    count: 0,
  },
  {
    name: "Elk",
    image: "/images/elk.jpg",
    count: 0,
  },
  {
    name: "Bighorn Sheep",
    image: "/images/bighorn-sheep.jpg",
    count: 0,
  }, 
  {
    name: "Otter",
    image: "/images/bighorn-sheep.jpg",
    count: 0,
  }, 
  {
    name: "Wolverine",
    image: "/images/bighorn-sheep.jpg",
    count: 0,
  }, 
  {
    name: "Wolf",
    image: "/images/bighorn-sheep.jpg",
    count: 0,
  }, 
  {
    name: "Lynx",
    image: "/images/bighorn-sheep.jpg",
    count: 0,
  }, 
  {
    name: "Grizzly Bear",
    image: "/images/bighorn-sheep.jpg",
    count: 0,
  }, 

]);
const [sightingInfo, setSightingInfo] = useState<Record<string, string>>({});


function addAnimal(index: number) {
    const updatedAnimals = [...animals];

    updatedAnimals[index].count += 1;

    setAnimals(updatedAnimals);
  }

  function subtractAnimal(index: number) {
    const updatedAnimals = [...animals];

    if (updatedAnimals[index].count > 0) {
      updatedAnimals[index].count -= 1;
    }

    setAnimals(updatedAnimals);
  }

    function updateSightingInfo(name: string, text: string) {
    setSightingInfo((prev) => ({
      ...prev,
      [name]: text,
    }));
  }

  function submitSurvey() {
    console.log(animals, sightingInfo);
    
  }


  return (


    <><div className="card-container">
      {animals.map((animal, index) => (
        <Card
          key={animal.name}
          name={animal.name}
          image={animal.image}
          count={animal.count}
          onAdd={() => addAnimal(index)}
          onSubtract={() => subtractAnimal(index)} 
          value={sightingInfo[animal.name] || ""}
          onValueChange={(text) => updateSightingInfo(animal.name, text)}

          />          
      ))}
    </div><><button onClick={submitSurvey}>Submit</button></></>
    

  );
}

export default SurveyPage;