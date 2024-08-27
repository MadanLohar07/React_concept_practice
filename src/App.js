import "./App.css";
import ComponentA from "./Components/Context/ComponentA";
import { UserProvider } from "./Components/Context/UserContext";
// import RenderPCommon from "./Components/RenderPCommon";
// import RenderPCount from "./Components/RenderPCount";
// import RenderPHover from "./Components/RenderPHover";
// import User from "./Components/User";
// import ClickCount from "./Components/ClickCount";
// import HoverCount from "./Components/HoverCount";
// import ParentMemo from "./Components/ParentMemo";
// import LifeCycleA from "./Components/LifeCycleA";
// import ClassConditional from "./Components/ClassConditional";
// import FetchData from "./Components/FetchData";
// import Form from "./Components/Form";
// import NameList from "./Components/NameList";
// import Conditional from "./Components/Conditional";
// import ParentComp from "./Components/ParentComp";
// import ClickHandler from "./Components/ClickHandler";
// import Message from "./Components/Message";
// import Greet from "./Components/Greet";
// import styles from "./myStyles.module.css";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Clark">
        <p>This is sub-paragraph.</p>
      </Greet>
      <Greet name="Chirsh" />
      <Greet name="Diana" /> */}
      {/* <Message /> managing state using useState hook. */}
      {/* <ClickHandler event handling /> */}
      {/* <ParentComp /> passing data from child to parent component using props. */}
      {/* <Conditional /> conditional rendering */}
      {/* <NameList /> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <FetchData /> */}
      {/* <ClassConditional /> */}
      {/* <LifeCycleA /> */}
      {/* <ParentMemo /> */}
      {/* <ClickCount name="Bruce" /> */}
      {/* <HoverCount /> */}
      {/* <RenderPCount />
      <RenderPHover />
      <User render={(isLoggedIn) => (isLoggedIn ? "Diana" : "Guest")} /> */}
      {/* <RenderPCommon
        render={(count, incrementCount) => (
          <RenderPCount count={count} incrementCount={incrementCount} />
        )}
      />
      <RenderPCommon
        render={(count, incrementCount) => (
          <RenderPHover count={count} incrementCount={incrementCount} />
        )}
      /> */}

      <UserProvider value="Diana">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
