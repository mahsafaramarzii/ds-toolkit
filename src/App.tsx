import { Button } from "./components/atoms/Button";
import { Card } from "./components/molecules/Card"
function App() {
  return (
    
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
  </div>
  );
}

export default App;