import Data from "../app/components/data"; 
import ArticleCard from "../app/components/ArticleCard"; 

export default function Home(){
    const projectName = "Exercise Two";
    

    return (
        <main>
            <h1>{projectName}</h1>
            <ArticleCard title="Cool Title" description="Cool descripton"/>
            <ArticleCard title="Another Title"/>
        </main>
        
    );
}