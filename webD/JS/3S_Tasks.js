//TASK -------------------------------------

function assign1(){
    for(let i =1; i <=20 ; i++){
        console.log(i)
        if(i%7 == 0){
            break;
        }
    }
}

assign1();


//task--------------------------------------------

const nums = [3, -1, 0, 5, -10, 8];
for(let i = 0; i <= nums.length; i++){
    if(nums[i] <= 0){
        continue;
    }
    console.log(nums[i]);
}



function handleCommand(command){
    switch(command){
        case "Start":
            console.log("started");
            break;
        case "Stop":
            console.log("stopped");
            break;
        case "Pause":
            console.log("paused");
            break;
        case "Resume":
            console.log("resumed");
            break;
        default:
            console.log("invalid command");
            break;
    }
}
handleCommand("Start")
handleCommand("Stop")
handleCommand("Pause")
handleCommand("Resume")
handleCommand("Invalid")
