import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApolloProvider } from "@apollo/client";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
