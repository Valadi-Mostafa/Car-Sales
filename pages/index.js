import Allbutton from "@/components/module/Allbutton";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Index() {
  const cars = carsData.slice(0, 3);

  return (
    <>
      <SearchBar />
      <Categories />
      <Allbutton />
      <CarsPage data={cars} />
    </>
  );
}

export default Index;
