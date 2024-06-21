import './App.css';

let vegetablesObject = [
  { 
      name: "Carrot", 
      color: "Orange", 
      type: "Root",
      nutritionalInfo: {
          calories: 41,
          carbohydrates: 9.6,
          protein: 0.9,
          fat: 0.2,
          vitamins: {
              vitaminA: "Good source",
              vitaminC: "Good source",
              vitaminK: "Good source"
          }
      }
  },
  { 
      name: "Broccoli", 
      color: "Green", 
      type: "Cruciferous",
      nutritionalInfo: {
          calories: 55,
          carbohydrates: 10,
          protein: 4.2,
          fat: 0.6,
          vitamins: {
              vitaminA: "Good source",
              vitaminC: "Excellent source",
              vitaminK: "Excellent source"
          }
      }
  },
  { 
      name: "Tomato", 
      color: "Red", 
      type: "Fruit (culinary)",
      nutritionalInfo: {
          calories: 18,
          carbohydrates: 3.9,
          protein: 0.9,
          fat: 0.2,
          vitamins: {
              vitaminA: "Good source",
              vitaminC: "Excellent source",
              vitaminK: "Good source"
          }
      }
  },
];


export default function App() {

    return (
      <div>
        <h1>List of Vegetables</h1>
        <ul>
          {vegetablesObject.map((vegetable) => (
            <li>{vegetable.name} - Type: {vegetable.type}</li>
          ))}
        </ul>
      </div>
    );
  }

  App();  