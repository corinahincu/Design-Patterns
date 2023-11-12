import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import {LargePersonListItem} from "./people/LargePersonListItem"
import {SmallProductListItem} from "./products/SmallProductListItem"
import {LargeProductListItem} from "./products/LargeProductListItem"
import { NumberedList } from "./NumberedList";
/* import { Modal } from "./Modal"; */


const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
];

const products = [
  {
    name: "Flat-screen TV",
    price: "$300",
    description: "Hugo LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
];

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      /> 
    </>
  );
}

export default App;
