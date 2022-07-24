import React from "react";
import axios from "axios";
// import './App.css';

import ExportToExcel from "./ExportToExcel";

function App() {
  const [data, setData] = React.useState([]);
  const fileName = "myfile"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:8080/api/teacher").then(response => {
        let newArray = [];
        response.data.map(item => {
          let obj = { name: item.name, surname: item.surname };
          newArray.push(obj);
          setData(newArray);
        });
      });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default App;
