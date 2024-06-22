import { useState, useEffect } from "react";
import makes from "../../data/makes";

const FormSelect = () => {
  const [carBrand, setCarBrand] = useState("");
  const [price, setPrice] = useState();
  //   const [mileageFrom, setMileageFrom] = useState('');
  //   const [mileageTo, setMileageTo] = useState('');
  const [priceOptions, setPriceOptions] = useState([]);
  //   const [brands, setBrands] = useState([]);

  useEffect(() => {
    const options = [];
    for (let i = 10; i <= 100; i += 10) {
      options.push(i);
    }
    setPriceOptions(options);
  }, []);

  return (
    <div>
      <form>
        <div>
          <label>
            Car brand
            <select
              id="carBrand"
              name="carBrand"
              value={carBrand}
              onChange={(e) => setCarBrand(e.target.value)}
            >
              <option value="carBrand">Enter the text</option>
              {makes.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Price / 1 hour
            <select
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            >
              <option value="price">to $</option>
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FormSelect;