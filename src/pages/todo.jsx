// // import React, { useState } from "react";
// // const Todo = ()=>{
// //     const [todinput,setTodoInput] = useState('');
// //     const [todoData,setTodoData] = useState([]);
// //     const [isEdit,setIsEdit] = useState(false);
// //     const [targetIndex,setTargetIndex] = useState('');
 
// //     // add item function 
// //     const addItem = (e)=>{
       
// //         setTodoInput(e.target.value);
// //       setTodoInput('');
// //       const todoClone = [...todoData];
// //       todoClone.push(todinput);
// //       setTodoData(todoClone);
// //       setTodoInput('')

// //     }
// //     // deleteHandler function 
// //     const deleteHandler = (index)=>{
// //         console.log(index);
// //         const todoClone = [...todoData];
// //         todoClone.splice(index,1);
// //         // update setTodoData
// //         setTodoData(todoClone)
// //     }
// //     // editItem funtion 
// //     const editItem = (index,item)=>{
// //         console.log(index);
        
// //         setTodoInput(item)
// //         setTargetIndex(index)
// //         setIsEdit(true)
// //     }
// //     // update item function 
// //     const updateItem = ()=>{
// //         const todoClone = [...todoData]
// //         todoClone.splice(targetIndex,1,todinput)
// //         setTodoData(todoClone);
// //         setTodoInput('');
// //         setIsEdit(false);
// //         setTargetIndex('')
// //     }
// //     // cancel function
// //     const cancelEdit = ()=>{
// //         setIsEdit(false);
// //         setTargetIndex('');
// //         setTodoInput('');
// //     }
// //     return(
// //         <div className="border-black bg-amber-500">
// //             <h1 className="flex justify-center text-[30px] font-medium">Todo List</h1>
// //             <div className="flex justify-center">
// //                 <input type="text" value={todinput}
// //                 onChange={(e)=>setTodoInput(e.target.value)} className="border-amber-100 p-[10px] bg-lime-400" />
// //                { (isEdit)
// //                 ?
// //                <div>
// //                  <button onClick={updateItem} disabled={todinput.trim().length <1}>update Item</button>

// //                  <button onClick={cancelEdit}>Cancel Edit</button>
// //                </div>
                
// //                 :
// //                 <button onClick={addItem} disabled={todinput.trim().length <1}>Add Item</button>}
// //             </div>
// //             <div><ul>
// //                 {todoData.map((item,index)=>{
// //                     return(
// //                         <li>{item}
// //                         <button onClick={()=>deleteHandler(index)}>Delete Item</button>
// //                         <button onClick={()=>editItem(index,item)}>Edit</button></li>
// //                     )
// //                 })}
// //                 </ul></div>
// //         </div>
// //     )
// // }
// // export default Todo;


// import React, { useState } from "react";

// const Todo = () => {
//   const [todoinput, setTodoInput] = useState("");
//   const [todoData, setTodoData] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [targetIndex, setTargetIndex] = useState("");

//   // ✅ Add item function (fixed)
//   const addItem = () => {
//     const trimmed = todoinput.trim();
//     if (trimmed.length < 1) return;
//     const todoClone = [...todoData, trimmed];
//     setTodoData(todoClone);
//     setTodoInput("");
//   };

//   // ✅ Delete item
//   const deleteHandler = (index) => {
//     const todoClone = [...todoData];
//     todoClone.splice(index, 1);
//     setTodoData(todoClone);
//   };

//   // ✅ Edit item
//   const editItem = (index, item) => {
//     setTodoInput(item);
//     setTargetIndex(index);
//     setIsEdit(true);
//   };

//   // ✅ Update item
//   const updateItem = () => {
//     const trimmed = todoinput.trim();
//     if (trimmed.length < 1) return;
//     const todoClone = [...todoData];
//     todoClone.splice(targetIndex, 1, trimmed);
//     setTodoData(todoClone);
//     setTodoInput("");
//     setIsEdit(false);
//     setTargetIndex("");
//   };

//   // ✅ Cancel editing
//   const cancelEdit = () => {
//     setIsEdit(false);
//     setTargetIndex("");
//     setTodoInput("");
//   };

//   return (
//     <div className="min-h-screen bg-cyan-300 flex flex-col items-center justify-start p-6">
//       <div className="bg-white w-full  max-w-md shadow-2xl rounded-2xl p-6 mt-10">
//         <h1 className="text-3xl font-bold text-center text-amber-600 mb-6">
//           📝 Todo List
//         </h1>

//         {/* Input Section */}
//         <div className="flex gap-3 mb-6">
//           <input
//             type="text"
//             value={todoinput}
//             onChange={(e) => setTodoInput(e.target.value)}
//             placeholder="Enter your task..."
//             className="flex-grow w-sm[70%] p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
//           />
//           {isEdit ? (
//             <>
//               <button
//                 onClick={updateItem}
//                 disabled={todoinput.trim().length < 1}
//                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={cancelEdit}
//                 className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-2 rounded-lg"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={addItem}
//               disabled={todoinput.trim().length < 1}
//               className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
//             >
//               Add
//             </button>
//           )}
//         </div>

//         {/* Todo List Section */}
//         {todoData.length > 0 ? (
//           <ul className="space-y-3">
//             {todoData.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between bg-amber-100 border border-amber-200 p-3 rounded-lg shadow-sm"
//               >
//                 <span className="text-lg text-gray-700">{item}</span>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => editItem(index, item)}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteHandler(index)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-600">No tasks yet. Add one!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Todo;



import React, { useState } from "react";

const Todo = () => {
  const [todoinput, setTodoInput] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [targetIndex, setTargetIndex] = useState("");

  // add item function
  const addItem = () => {
    const trimmed = todoinput.trim();
    if (trimmed.length < 1) return;
    const todoClone = [...todoData, trimmed];
    setTodoData(todoClone);
    setTodoInput("");
  };

  // deleteHandler function
  const deleteHandler = (index) => {
    const todoClone = [...todoData];
    todoClone.splice(index, 1);
    setTodoData(todoClone);
  };

  // editItem function
  const editItem = (index, item) => {
    setTodoInput(item);
    setTargetIndex(index);
    setIsEdit(true);
  };

  // update item function
  const updateItem = () => {
    const trimmed = todoinput.trim();
    if (trimmed.length < 1) return;
    const todoClone = [...todoData];
    todoClone.splice(targetIndex, 1, trimmed);
    setTodoData(todoClone);
    setTodoInput("");
    setIsEdit(false);
    setTargetIndex("");
  };

  // cancel function
  const cancelEdit = () => {
    setIsEdit(false);
    setTargetIndex("");
    setTodoInput("");
  };

  return (
    <div className="min-h-screen bg-cyan-300 flex flex-col items-center justify-start p-4 sm:p-6">
      <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg shadow-2xl rounded-2xl p-4 sm:p-6 mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-amber-600 mb-6">
          📝 Todo List
        </h1>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={todoinput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="Enter your task..."
            className="flex-grow w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 text-gray-700"
          />
          {isEdit ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={updateItem}
                disabled={todoinput.trim().length < 1}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                Update
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={addItem}
              disabled={todoinput.trim().length < 1}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Add
            </button>
          )}
        </div>

        {/* Todo List Section */}
        {todoData.length > 0 ? (
          <ul className="space-y-3">
            {todoData.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-amber-100 border border-amber-200 p-3 rounded-lg shadow-sm"
              >
                <span className="text-lg text-gray-700 break-words">
                  {item}
                </span>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => editItem(index, item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHandler(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
