import { useState } from "react";
export default function Todo({item}) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {
        return (<form>
            <input type="text"></input>
            <button>Update</button>
        </form>
        );
    }

    function TodoElement() {
        return             <div>
        {item.title} <button onClick={() => setIsEdit(true)}>Edit</button>
        <button>Delete</button>
    </div>
    }

    return (
    <div className="todo">
        {isEdit ? (
         <div>Modo editar</div>
         ) : (

         )}
    </div>


    ); 
}