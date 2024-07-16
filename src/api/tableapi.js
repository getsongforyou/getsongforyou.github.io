import instance from '@/utils/requset'

export function getTable(params){
    return instance.get(
        '/getTable',
        params
    )
}