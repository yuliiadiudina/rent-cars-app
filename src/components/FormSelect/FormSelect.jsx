// import { useState, useEffect } from 'react';
// import css from "./FormSelect.module.css"
// import makes from '../../data/makes';

// const FormSelect = () => {
//   const [priceOptions, setPriceOptions] = useState([]);

//   useEffect(() => {
//     const options = [];
//     for (let i = 10; i <= 100; i += 10) {
//       options.push(i);
//     }
//     setPriceOptions(options);
//   }, []);

//   return (
//     <div>
//       <form>
//         <div>
//           <label>
//             Car brand
//             <select id="carBrand" name="carBrand" value="">
//               <option value="">Enter the text</option>
//               {makes.map((brand, index) => (
//                 <option key={index} value={brand}>
//                   {brand}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>

//         <div>
//           <label>
//             Price / 1 hour
//             <select id="price" name="price" value="">
//               <option value="">To $</option>
//               {priceOptions.map(option => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>

//         <div>
//           <label>
//             Сar mileage / km
//             <div className={css.rangeInput}>
//               <input type="number" name="from" value="" placeholder="From" />
//               <span className={css.separator}>|</span>
//               <input type="number" name="to" value="" placeholder="To" />
//             </div>
//           </label>
//         </div>

//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default FormSelect;
