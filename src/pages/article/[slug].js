import {useRouter} from "next/router"; 
import Data from '../../app/components/data'; 
import styles from '../../app/page.module.css'; 


export default function Article() {
    const router = useRouter(); 
    const slug= router.query.slug; 

    const articleData = Data.find((val) => val.id === slug); 

    if(!articleData) return null; /* help with error */

    return (
        <main> 
        <h1>{articleData.title}</h1>
        <p>{articleData.publishedDate}</p>

        <p>{articleData.blurb}</p>
        </main>
    ); 
}