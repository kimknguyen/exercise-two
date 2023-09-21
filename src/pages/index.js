import Data from "../app/components/data"; 
import ArticleCard from "../app/components/ArticleCard"; 

export default function Home(){
    const projectName = "Exercise Two: Articles";
    

    return (
        <main>
            <h1>{projectName}</h1>
            {Data.map((article) => (
                 <ArticleCard 
                 key={article.id}
                 date={new Date(article.publishedDate).toDateString()}
                 description={article.blurb}
                 imageAlt={article.image.alt}
                 imageSrc={article.image.url}
                 title={article.title}
                 /> 
            ))}
          

        </main>
        
    );
}


