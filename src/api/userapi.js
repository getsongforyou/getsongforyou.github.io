import instance from "@/utils/requset";

export  function login(params){
    return instance.post(
        '/login',
        params
    )
}

export function logOut(params){
    return instance.post(
        '/logout',
        params
    )
}

// get user info
export function getInfo(){
    return instance.get(
        '/getInfo'
    )
}