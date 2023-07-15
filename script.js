let inp = document.getElementById("inp");
let text = document.querySelector(".text");
let del = document.getElementById("delete_all");

let i=0;
function add(){
    if(inp.value == ""){
         alert("Your Task is Empty !!!")
    }
    else
    {   
        i++;
        let new_element = document.createElement("ul");
        new_element.innerHTML = `${inp.value} <i class="fa-solid fa-trash"></i>`;
        inp.value = "";
        text.appendChild(new_element);
        new_element.querySelector("i").addEventListener("click" , function(){
            i--;
            new_element.remove();
        })
    }
}
function deleteit(){
        if(i==0){
            alert("Your list is already empty !!!");
        }
        else
        {
            var child = text.lastElementChild;
            while(child)
            {
                text.removeChild(child);
                child = text.lastElementChild;
                i--;
            }
        }
    }