import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <footer>
          <div className="Footer">
            This website was coded by{" "}
            <a
              className="name-link"
              href="https://www.linkedin.com/in/anjana-kurdina"
              target="_blank"
              rel="noreferrer noopener"
            >
              <em>Anjana Kurdina</em>
            </a>
            , is open-sourced on{" "}
            <a
              href="https://github.com/AnjanaKurdina/dictionary-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>{" "}
            and hosted by{" "}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Netlify
            </a>
            .
          </div>
        </footer>
      </div>
    </div>
  );
}
