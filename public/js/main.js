
const createUserBtn = document.getElementById("create-user");

const username = document.getElementById("username");
const soket = io()

createUserBtn.addEventListener("click",(e) =>{
if(username.value !== ""){
    socket.email("join-user",username.value);
}
});