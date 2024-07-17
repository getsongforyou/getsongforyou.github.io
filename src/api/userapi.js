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