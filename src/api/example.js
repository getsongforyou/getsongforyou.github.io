import instance from "@/utils/requset";

export function postArticle(form){
    return instance.post(
        '/postArticle',
        {
            form
        }
    )
}


export function getArticleList(){
    return instance.get(
        '/getArticleList'
    )
}