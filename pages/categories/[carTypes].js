import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function Cartypes() {
  const router = useRouter();
  const carModel = router.query.carTypes;
  const car = carsData.filter((car) => car.category === carModel);
  return <CarsList data={car} />;
}

export default Cartypes;
