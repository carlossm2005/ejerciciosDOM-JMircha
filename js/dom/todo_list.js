const d = document,
ls = localStorage;

export default function crearItem(){
   const $lista = d.getElementById("lista-todo");
   const $form = d.getElementById("create");

   d.addEventListener("submit", e=>{
      e.preventDefault();
      const tarea = $form.tarea.value;

      if (e.target === $form) {
         const li = d.createElement("li");
         const p = d.createElement("p");
         p.className = "parrafo";
         p.textContent = tarea;
         li.className = "item";

         li.appendChild(addDeleteBtn());
         li.appendChild(p);
         $lista.appendChild(li);


         ls.setItem(p.textContent, "incompleto");
      };
   });

   function addDeleteBtn(){
      const deleteBtn = d.createElement("button");

      deleteBtn.textContent = "X";
      deleteBtn.className = "eliminar";

   d.addEventListener("click", e =>{
      if (e.target === deleteBtn) {
         const item = e.target.parentElement;
         $lista.removeChild(item);
         ls.removeItem(e.target.nextSibling.textContent)
      };

   });
   return deleteBtn;
   };

   $lista.addEventListener("click", e =>{
      e.target.parentElement.classList.toggle("completado");
      if (e.target.textContent !== "X") {
         ls.setItem(e.target.textContent, "completo");
         if (e.target.parentElement.getAttribute("class") !== "item completado") {
            ls.setItem(e.target.textContent, "incompleto");
         };
      };
   });
   d.addEventListener("DOMContentLoaded", e =>{
      for (let i = 0; i < ls.length; i++) {
         const parrafo = ls.key(i);

         if (parrafo !== "theme") {
            if (ls.getItem(parrafo) === "incompleto") {
               const li = d.createElement("li");
               const p = d.createElement("p");
               p.className = "parrafo";
               p.textContent = parrafo;
               li.className = "item";
      
               li.appendChild(addDeleteBtn());
               li.appendChild(p);
               $lista.appendChild(li);         
            }
            if (ls.getItem(parrafo) === "completo") {
               const li = d.createElement("li");
               const p = d.createElement("p");
               p.className = "parrafo";
               p.textContent = parrafo;
               li.className = "item completado";
      
               li.appendChild(addDeleteBtn());
               li.appendChild(p);
               $lista.appendChild(li);         
            }
         }
      };
   });
}