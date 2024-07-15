import instance  from '../utils/requset'

export function postLogin(params){
    return instance.post(
        '/login',
        params
    )
}

