 //import { Button } from "./components/atoms/Button";
//import { Card } from "./components/molecules/Card"
//import { useState } from "react";
//import { Modal } from "./components/molecules/Madol";
//import { Dropdown } from "./components/molecules/Dropdown"; 
//import { useTheme } from "./context/Themecontex";
 //import { DataTable } from "./components/molecules/DataTable"; 


 function App() {




  /* 
  const { theme, toggleTheme } = useTheme();
const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
    },
  ];
   

  const [open, setOpen] = useState(false); 

  return (
    <>  <div
    className={
      theme === "dark"
        ? "min-h-screen bg-gray-900 text-white"
        : "min-h-screen bg-white text-black"
    }
  >
   <div
    className="
      grid
      gap-6
  
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    "
  >
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <Card key={item}>
        <h3 className="text-lg font-semibold">
          Project {item}
        </h3>
  
        <p className="mt-2 text-gray-600">
          Reusable component for DS-Toolkit.
        </p>
  
        <button className="mt-auto pt-6 text-blue-600 font-medium">
          View Details
        </button>
      </Card>
      
    ))}
    <Dropdown
  items={[
    {
      label: "React",
      value: "react",
    },
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "Angular",
      value: "angular",
    },
  ]}
  onSelect={(value) =>
    console.log(value)
  }
/> 
</div> 





    <Button
        onClick={() => setOpen(true)}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="DS Toolkit"
      >
        <p>
          Reusable modal   component.
       </p>
      </Modal>
      <DataTable data={users}  columns={[ {    key: "name",  header: "Name",  }, { key: "email", header: "Email",},
    ]}
  /> 

<button
  onClick={toggleTheme}
  className="
    mb-6
    rounded-lg
    border
    px-4
    py-2
  "
>
  {theme === "light"
    ? "🌙 Dark Mode"
    : "☀️ Light Mode"}
</button>
  </div>
  </>*/
)
}
export default App;

