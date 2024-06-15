const taskStrArray = localStorage.getItem('tasks');
            const taskArray = JSON.parse(taskStrArray);


            const dateStrArray = localStorage.getItem('dates');
            const dateArray = JSON.parse(dateStrArray);


            const taskList = taskArray.slice();
            const taskDate = dateArray.slice();
            
            displayTasks();


            function addTask()
            {
                //get task
                const task = document.querySelector('.task-name').value;
                taskList.push(task);

                //get date
                const date = document.querySelector('.date').value;
                taskDate.push(date);
                localStorage.setItem('tasks', JSON.stringify(taskList));
                localStorage.setItem('dates', JSON.stringify(taskDate));
                
                displayTasks();
            }

            function displayTasks()
            {
                tasksDisplayhtml = '';
                
                for(var x = 0; x < taskList.length; x++)
                {
                    task = taskList[x];
                    date = taskDate[x]
                    html = `<div class='output-grid'>
                        <p class='task-para'>
                        ${task}
                        </p>
                    <p class='date-para'>
                         ${date}
                         </p>
                    <button class = 'deleteButton' onclick='deleteTask(${x})'>
                        Delete
                        </button>
                        </div>`;
                    tasksDisplayhtml += html;
                }
                
                const taskDisplay = document.querySelector('.task-display');
                taskDisplay.innerHTML = tasksDisplayhtml;
            }

            function deleteTask(index)
            {
                taskList.splice(index, 1);
                taskDate.splice(index, 1);
                displayTasks();
                //updating the local storage

                localStorage.setItem('tasks', JSON.stringify(taskList));
                localStorage.setItem('dates', JSON.stringify(taskDate));
                console.log(taskList);
            }

