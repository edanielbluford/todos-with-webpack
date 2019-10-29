export default function ToDos(toDos) {
  return `
        <ul> 
            ${toDos
              .map(toDo => {
                return `
                    <li>
                        <h3>${toDo}</h3>
                    </li>
                `;
              })
              .join("")}
         </ul>

         <section class='add-toDo'>
            <input class='add-toDo__toDoName' type='text' placeholder='Add a toDo!'>
            <button class='add-toDo__submit'>Submit</button>
        </section>
    `;
}
