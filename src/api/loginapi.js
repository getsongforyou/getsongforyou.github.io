import instance  from '../utils/requset'

export function postLogin(data){
    return instance.post(
        '/login',
        {
            data
        }
    )
}

