import { BackToHome } from "../App";

const array1 = [
  ["name", "id", "age", "weight", "job"],
  ["Mohammed", "3", "20", "120", "developer"],
  ["John", "1", "21", "150", "designer"],
  ["Ali", "2", "23", "90", "doctor"],
  ["Mariam", "4", "20", "100", "lawyer"]
];

const array2 = [
  ["name", "id", "height"],
  ["Ali", "2", "50"],
  ["John", "1", "45"],
  ["Mariam", "4", "43"],
  ["Mohammed", "3", "48"],
  ["Tony", "5", "96"]
];

const array3 = [
  ["name", "id", "parent"],
  ["Ali", "2", "yes"],
  ["John", "1", "yes"],
  ["Tony", "5", "yes"]
];

const array4 = [
  ["name", "id", "hobby"],
  ["Mariam", "4", "video games"],
  ["Ali", "2", "kickboxing"],
  ["Tony", "5", "football"]
];

const array5 = [
  ["id", "status"],
  ["1", "active"],
  ["2", "inactive"],
  ["3", "active"],
  ["4", "active"],
  ["5", "active"]
];

/* 
  Combine the arrays into one table. 
  You may find console.table()
  useful for monitoring your progress
  You may not install any external libraries.
*/

const aoa_to_ooo = aoa_table => {
  /* transfrom array of arrays into object of objects */
  
  // get table heads and rows (assuming heads will always be the first row)
  const table_heads = aoa_table[0]
  const table_rows = aoa_table.slice(1)

  // ooo_table is an object of objects where values are table_rows transformed into objects and keys are row ids 
  const ooo_table = table_rows.reduce((table, row_arr)=> {

    // transform each row from array into object where keys are table heads at the same index
    const row_obj = row_arr.reduce((row, value, idx) => {
      
      const head = table_heads[idx]
      row[head] = value
      return row

    }, {})

    const row_id = row_obj['id']
    table[row_id] = row_obj
    return table

  }, {})
  
  // console.table(ooo_table)
  return ooo_table

}

const solution = () => {
  // transform arrays into objects
  const array_tables = [array1, array2, array3, array4, array5]
  const object_tables = array_tables.map(aoa => aoa_to_ooo(aoa))
  // merge object tables into one table
  const final_table = object_tables.reduce((merged, table) => {
    
    Object.entries(table).forEach(([id, row]) => {
      merged[id] = {...( merged[id] || {} ) , ...row}
    });

    return merged
  }, {})

  console.table(final_table)
  return final_table
}

const ChallengeOne = () => {
  
  const final_table = solution()
  // do something with the table
  
  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-grey-lighter theme-override">Challenge 1</h1>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        Inside <code>/tasks/one.js</code> you will find a set of arrays. Merge
        them into one array.
      </h2>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        You may not install any additional libraries.
      </h2>

      <br /><h1 className="title is-3 has-text-grey-lighter theme-override">Solution:</h1>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        Press <code>F12</code> then <code>F5</code> to see the table in console. And check <code>/tasks/one.js</code> for the code.
      </h2>
    </>
  );
};

export default ChallengeOne;
