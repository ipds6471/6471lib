import { Spinner } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex w-full justify-center">
      <Spinner label="Memuat Data..." color="default" labelColor="foreground" />
    </div>
  );
}
