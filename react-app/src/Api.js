import axios from 'axios';
const users_login_url = "http://localhost:8080/user/";

class userLoginService {
    
    postUserLogin(userDetail){
        

        axios.post(users_login_url+"login",userDetail).then(res => {
            console.log(res.data)
            return res.data
            
        }).catch(err =>{ 
            if((err.message)==="Request failed with status code 401"){
                console.log(401)
                return "un-authorized"
            }
            else if((err.message)==="Request failed with status code 404"){
                console.log(404)                
                return "not-found"
            }})
    }


    getBooksUser(userName){
        const userBook = [];
        axios.get(users_login_url+"users/"+userName).then(res => {
            console.log(res.data)
            userBook.push(res.data.bookList)
            console.log(userBook)
        }).catch(err =>{ 
            console.log(err)    
        })
    }
}


export default new userLoginService();