import axios from "axios";
import { useEffect, useState } from "react";
import { INEWS } from "./types";

const App = () => {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState<INEWS[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://api-v2.elchocrud.pro/api/v1/82f7565f9852cf5f6fadace39183377d/product-v2"
      );
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  const postData = async () => {
    try {
      const { data } = await axios.post(
        "https://api-v2.elchocrud.pro/api/v1/82f7565f9852cf5f6fadace39183377d/product-v2",
        {
          name: value,
        }
      );
      console.log(data);
      setProduct(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <button onClick={postData}>Add</button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            {product.map((el) => (
              <div className="">
                <h1 key={el._id}>{el.name}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
