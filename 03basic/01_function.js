function loginUser(userName){
    if(!userName){
        return "Please enter username";
    }
    return `${userName} succesfulley logeed in`;
}
// let userName = "vishal";
  user = loginUser("vishal Singh");
  console.log(user);
