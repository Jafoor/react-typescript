import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
function App() {
  const personName = {
    first: "Abu",
    last: "Jafor"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Abu",
      last: "Jafor"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]

  return (
    <div className="App">
      <Greet  name="TypeScript" messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="success"/>
      <Heading> Placeholder text </Heading>
      <Oscar>
        <Heading> Oscar goes to Leonardo Dicpario! </Heading>
      </Oscar>
    </div>
  );
}

export default App;
