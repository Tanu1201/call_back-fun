const student=[
    {
        score:80,
        name:"Aman"
    },
    {
         score:70,
        name:"Aakash"
    },
    {
         score:95,
        name:"hari"
    },
    {
         score:98,
        name:"Palak"
    },
    
];

function getItem(){
    
    setTimeout(()=>{
    let displayItem=""
   student.forEach((student) => {
        console.log(student)
    })
    }, 1000)
}

function createItem(newItem){
    
    return new Promise(
        (resolve, reject) => {
            setTimeout(() =>{
               student.push(newItem)
                let flag=true;
                if(flag){
                    resolve();
                }
                else{
                    reject("There is a problem")
                }
            }, 5000)
        }
    )
}        



createItem({sno:70, name:"Ram"}).then(getItem).catch(err=>console.log(err))