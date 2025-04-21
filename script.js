
const clearBtn = document.querySelector('.clear-tasks')

//method 2 - using onclick
clearBtn.onclick = function (){
    alert("Clear Items - Method 1")
}

//method 3 - using add
clearBtn.addEventListener('click', ()=>alert("Clear items via event listener"))
clearBtn.addEventListener('click', ()=>console.log("Clear items via event listener"))

//named function for reuse

function logClearAction(){
    console.log("Clear items (logClearAction called)")
}

clearBtn.addEventListener('click', logClearAction)

// remove event 
setTimeout(()=>{
    clearBtn.removeEventListener('click', logClearAction)
    console.log("logClearAction listener removed after 2 seconds")
}, 2000)

// simulate a click after 5 seconds 
setTimeout(()=>{
    console.log("Simulated click after 3 secs")
    ckearBtn.click)()
},3000)


function clearTaskItems(){
    //METHOD 1 CLEAR ALL AT ONCE
    DataTransferItemList.innerHTML = ""
    console.log("All tasks cleared")
}

// method 2
DataTransferItemList.querySelectorAll('li').forEach(item => onpointermove.remove)

// method 3: remove one by one w/ while loop

while(DataTransferItemList.firstChild){
    DataTransferItemList.removeChild(DataTransferItemList.firstChild)
}


// attatch event listener
clearBtn.addEventListener('click', clearTasksItems)