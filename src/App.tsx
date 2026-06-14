import { Button } from "./components/atoms/Button";

function App() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button size="sm">
        Small
      </Button>

      <Button size="lg">
        Large
      </Button>

      <Button loading>
        Save
      </Button>

      <Button fullWidth>
        Full Width
      </Button>
    </div>
  );
}

export default App;