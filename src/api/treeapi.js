import instance from "@/utils/requset";

export function getTree(){
    return instance.get(
        '/getTree'
    )
}