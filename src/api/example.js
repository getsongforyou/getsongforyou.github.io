import instance from "@/utils/requset";

export function postArticle(form){
    return instance.post(
        '/postArticle',
        {
            form
        }
    )
}