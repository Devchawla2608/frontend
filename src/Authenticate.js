import jwt from 'jsonwebtoken';
function authenticate(){
    const token = localStorage.getItem('token');
    if(token){
        const user = jwt.decode(token);
    if(!user){
        localStorage.removeItem('token');
        return false;
    }else{
        return true;
    }
    }else{
        return false;
    }
}

export default authenticate;