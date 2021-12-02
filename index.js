var myaddbo = document.querySelector(".head2");
myaddbo.addEventListener("click", function(){
    var mydivm = document.querySelector(".some");
    mydivm.style.display = "block"
})




setInterval(() => {
    if(tasklist==""){
        document.getElementsByClassName("nohead")[0].style.display = "block"
    }
    else{
        document.getElementsByClassName("nohead")[0].style.display = "none"
    }
}, 1000);





const tasklist = [];

const taskitt = [];

const addtask = () => {

    var namee = document.getElementById("name").value;
    if(namee==""){
        alert("Please Fill Some Data")

    }

    else{
    
    var mydivm = document.querySelector(".some");
    mydivm.style.display = "none"
    

    const tempObj = {
        name:namee
    }

    tasklist.push(tempObj);

    ontaskscree();

    

    

}

}



const closepop =() => {
    var mydivm = document.querySelector(".some");
    mydivm.style.display = "none";

    

}


var mymyy = document.querySelector(".taskco");

mymyy.addEventListener("click", function(){

    document.querySelector(".head").style.display = "block"
    document.querySelector(".heady1").style.display = "none"
})




const ontaskscree = () => {
    const elem = document.createElement("div");
    elem.setAttribute("class","child");

    var myfir = document.createElement("p");
    myfir.setAttribute("class","mypcls");
    myfir.innerText = tasklist[tasklist.length-1].name;



    document.getElementById("task").appendChild(elem);
    elem.appendChild(myfir);
    myfir.addEventListener("click", function(){
        document.querySelector(".head").style.display = "none"
        document.querySelector(".heady1").style.display = "block"

        document.querySelector(".tripto").innerText = myfir.innerText;
        document.querySelector(".child").style.display="none"
        


        // if(tasklist.length==1){
        //     document.querySelector(".tripto").innerText = myfir.innerText;
        // elem.querySelector(".child").style.display="none"

        // }
        // else {
        //     document.querySelector(".tripto").innerText = myfir.innerText;
        // document.querySelector(".child").style.display="none"
        // }
        
    })

    if(tasklist.length===0){
        console.log("sfduhg")
        document.getElementsByClassName("nohead")[0].style.display = "block"
        
    }
    else{
        document.getElementsByClassName("nohead")[0].style.display = "none"
    }
    
    
   
    // document.getElementById("task").createElement("hr");


    const htmldata= ` <div class="opration">
    <p class="mypp"></p>
    <button class="delet"><i class="fas fa-trash-alt"></i></button>
    <button class="addbt"><i class="fas fas fa-plus"></i></button>
    <br>
                
    <div class="mylisdiv">
        <div class="carditt">
        <p class="newttt">Add New Item</p>
        <input type="text" value="" id="inpuss" ><br>
        <button class="btnsubb newbtn">submit</button>
        <button class="newbtn btnclos" >Close</button>
        </div>
    </div>

     </div> `;

    const hrtag = `<hr class="hrtag">`
    const myp = `<p id="myptag"></p>`

    

    

    elem.insertAdjacentHTML("beforeend",hrtag);


    elem.insertAdjacentHTML("beforeend", myp);

    elem.insertAdjacentHTML("beforeend" , htmldata);

    const deltbtn = elem.querySelector(".delet");
    const plushbtn = elem.querySelector(".addbt");
    const addlititbtn = document.querySelector(".btnsub");
    const inidd = elem.querySelector("#inpuss").value;
    const apnbtn = elem.querySelector(".btnsubb");
    const apnbtnclo = elem.querySelector(".btnclos");



    // var mmee = elem.querySelector(".child");

    //     mmee.addEventListener("click",function(){
    //     console.log("jkdfhgij")
    // })

    


    

    deltbtn.addEventListener("click" , function(){
        elem.remove();

        
            
        
    })

    apnbtnclo.addEventListener("click", function(){
        var tskfor = elem.querySelector(".mylisdiv");
        tskfor.style.display = "none";
    })


    

    apnbtn.addEventListener("click" , function(){
        var tskfor = elem.querySelector(".mylisdiv");
        tskfor.style.display = "none";
        var inidd = elem.querySelector("#inpuss").value;

        var newcre = document.createElement("div");
        newcre.setAttribute("class","mydiv");
        // newcre.innerText = inidd;

        var newpara = document.createElement("p");
        newpara.setAttribute("class","mypppp");
        newpara.innerText = inidd;


        var myclbtn = document.createElement("button");
        myclbtn.setAttribute("class","btnclre");
        myclbtn.innerText="Mark Done"

        elem.appendChild(newcre);
        newcre.appendChild(newpara);
        newcre.appendChild(myclbtn);

        const prmyy = newcre.querySelector(".mypppp")

        


        

        var mrkdon = newcre.querySelector(".btnclre");

        mrkdon.addEventListener("click" , function(){

        // var femm = 




        var mynewcre = newcre.querySelector(".mypppp"); 
        mynewcre.style.textDecoration = "line-through";
        mrkdon.style.display="none";   

        mynewcre.style.color="red";
    })


        

        
        
    })



    






    plushbtn.addEventListener("click" , function(){
        var tskfor = elem.querySelector(".mylisdiv");
        tskfor.style.display = "block";

        // addlititbtn.addEventListener("click" , function(){
        //     tskfor.style.display = "none";
        //     var listvalue = document.getElementById("listid").value;
    
        //     var imchi = document.querySelector(".child");
    
        //     imchi.insertAdjacentHTML("beforeend",listvalue)
    
        //     document.getElementById("parara").appendChild(imchi)
    
            
        // })
    })

    
    



    


}






