import FlightsAvailable from "@/components/FlightsAvailable";
import FlightSelection from "@/components/FlightSelection";

export default function Home() {
  return (
    <div
    className="flight-background"
    >
      <div className="flex h-screen flex-col" >
        <div className="flex justify-center items-baseline mt-8">
          <h1 className="h1">Search Flight</h1>
        </div>
        <div className="flex justify-center items-baseline mt-8">
          <FlightSelection/>
        </div>
        <FlightsAvailable/>
      </div>
    </div>
  );
}
