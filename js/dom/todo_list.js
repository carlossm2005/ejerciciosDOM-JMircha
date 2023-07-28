const d = document,
ls = localStorage;

export default function crearItem(){
   const $lista = d.getElementById("lista-todo");
   const $form = d.getElementById("create");
   const $vacio = d.querySelector(".vacio");

   d.addEventListener("submit", e=>{
      e.preventDefault();
      const tarea = $form.tarea.value;

      if (e.target === $form) {
         const li = d.createElement("li");
         const p = d.createElement("p");
         p.className = "parrafo"
         p.textContent = tarea;
         li.className = "item";

         li.appendChild(p)
         $lista.appendChild(li);
         li.appendChild(addDeleteBtn());

         $vacio.style.display = "none";

         ls.setItem(p.textContent, "incompleto")
      }
   });

   function addDeleteBtn(){
      const deleteBtn = d.createElement("button");

      deleteBtn.textContent = "X";
      deleteBtn.className = "eliminar";

   d.addEventListener("click", e =>{
      if (e.target === deleteBtn) {
         const item = e.target.parentElement;
         $lista.removeChild(item);
      };
      const items = document.querySelectorAll("li");

      if (items.length === 0) {
         $vacio.style.display = "block";
      };
   });
   return deleteBtn;
   }
   d.addEventListener("click", e =>{

   })
}