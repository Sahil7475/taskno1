let addbtn = document.getElementById("add_btn");
        
        addbtn.addEventListener("click",addchapters);
        let ullist = document.getElementById('list');
      
        let form = document.getElementsByClassName('form-control');

           
        function addchapters(e){
            let currentbtn = e.currentTarget;
            let currentInput = currentbtn.previousElementSibling;
            let currentchapter = currentInput.value;
            
            if(ullist.children[0].className == "emptymsg"){
                ullist.children[0].remove();
            }
            if(currentchapter.length==0){
                alert("Please mention the task")
            }
            else{
          
            form.innerHTML=` <input type="text"  class="form-control" value="" placeholder="Task name" aria-label="Recipient's username" aria-describedby="button-addon2">`
            let newLi = document.createElement("li");
           
            newLi.className="list-group-item d-flex justify-content-between";
            newLi.innerHTML=`
            <h3 class="flex-grow-1 task" >${currentchapter}</h3>
            <button class="btn btn-warning mx-2" onclick="editChapters(this)">Edit</button>
            <button class="btn btn-danger mx-3" onclick="removechapters(this)">Remove</button>
            <i class="fa-solid fa-check complete" onclick="taskdone(this)"></i>
         </li>`;

            
            ullist.appendChild(newLi);

            }
        }

            /* let removebtn = document.getElementById('removebtn');

            removebtn.addEventListener('click',removechapters); */
            function removechapters(currelement){
                    currelement.parentElement.remove();
                    let ullist = document.getElementById('list');
                   
                    if(ullist.children.length <=0){
                        
                    let newmessage = document.createElement("h3");
                    newmessage.classList.add('emptymsg')
                    newmessage.textContent ="Nothing is here , Please add a task!!";
                    ullist.appendChild(newmessage);

                    }


            }

            function editChapters(currelement){

                
                
                if(currelement.textContent == "Done"){
                
                currelement.textContent = "Edit";
                let currentchaptername = currelement.previousElementSibling.value
                let currheadings = document.createElement("h3");
                
                currheadings.className ="flex-grow-1";

                currheadings.textContent= currentchaptername
                
                currelement.parentElement.replaceChild(currheadings,currelement.previousElementSibling);
                }
                
                
                else{
                
                currelement.textContent = "Done";
                let currentchaptername = currelement.previousElementSibling.textContent
                let currInput = document.createElement("input");
                currInput.type = "text";
                currInput.placeholder ="Chapter name";
                currInput.className ="form-control";
                currInput.value=currentchaptername
                
                currelement.parentElement.replaceChild(currInput,currelement.previousElementSibling);
                }
            
            
            }

            function taskdone(currelement){
             
                let taskname = currelement.previousElementSibling.previousElementSibling.previousElementSibling
                taskname.classList.add('completed')

            }
