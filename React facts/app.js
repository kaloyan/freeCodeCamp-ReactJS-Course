const quotes = [
  "Was first released in 2013",
  "Was originally created by Jordan Walke",
  "Has well over 100K stars on GitHub",
  "Is maintained by Facebook",
  "Powers thousands of enterprice apps, including mobile apps",
];

function Navigation() {
  return (
    <nav>
      <div className="brand">
        <img id="logo" src="./react-logo.png" />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - project 1</h4>
    </nav>
  );
}

function Bullet(props) {
  return <li>{props.quote}</li>;
}

function Main() {
  return (
    <main>
      <h1>Fun facts about ReactJS</h1>
      <ul>
        {quotes.map((text, idx) => {
          return <Bullet quote={text} key={idx} />;
        })}
      </ul>
    </main>
  );
}

function App() {
  return (
    <div className="container">
      <Navigation />
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
