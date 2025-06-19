var ArticleFiles = [
    "GubbyWorld"
]
const ArticleFolder = "Articles"


var Articles = {}


function SetUpArticles(ArticleFileName){
    if (Articles[ArticleFileName] == undefined) {
        Articles[ArticleFileName] = fetch(ArticleFolder+"/"+ArticleFileName+".json") .then(response => response.json())
    }
}

ArticleFiles.forEach(SetUpArticles)

function GetArticleData(ArticleFileName) {
    return fetch(ArticleFolder + "/" + ArticleFileName + ".json")
        .then(response => response.json());
}

function LoadArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const ArticleName = urlParams.get('article');

    const Div_ArticleNumber =  document.getElementById("ArticleNumber")

    GetArticleData("GubbyWorld").then(AtrticleData => {
        console.log(AtrticleData)
        Div_ArticleNumber.innerHTML = AtrticleData.ArtNum
    });
}