import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (setArticles)=> {
    return(
        axiosWithAuth().get('http://localhost:5000/api/articles')
            .then(res => {
                console.log("ARTICLES", res.data[0])
                setArticles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    )
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.