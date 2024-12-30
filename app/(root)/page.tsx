import FlightSelection from "@/components/FlightSelection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex itemsflex justify-around h-screen" >
      <Sidebar/>
      <FlightSelection/>
    </div>
  );
}
