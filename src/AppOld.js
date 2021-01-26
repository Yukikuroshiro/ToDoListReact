import { useState } from "react";
import "./App.css";

function Header(props) {
  //Um componente React precisa obrigatóriamente começar com caps
  return (
    <header className="header">
      {props.children}
      <p>Hello world {props.name}</p>
      <button onClick={props.click}>Trocar Usuario</button>
      <hr />
    </header>
  );
}

function Form() {
  const [nome, setNome] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <>
      <p>{nome}</p>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={handleNome}
      />
    </>
  );
}

function App() {
  const [user, setUser] = useState("Fulano");

  const handleClick = () => {
    if (user === "Fulano") setUser("Ciclano");
    else setUser("Fulano");
  };

  return (
    <div>
      <Header name="Fulano de Tal" click={handleClick}>
        <p>Eu sou filho de Header</p>
      </Header>
      <p>My React App</p>
      <p>Nome do Usuario: {user}</p>
      <hr />
      <Form />
    </div>
  );
}

export default App;
