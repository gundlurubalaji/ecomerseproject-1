import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";
import "./main.css"


const Main = ()=> {
    const [firegame, setFiregame] = useState([]);
    const [funnygame, setFunnygame] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/firegames?populate=*').then((firegame)=> {
            // console.log(firegame.data.data)
            setFiregame(firegame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/funnygames?populate=*').then((funnygame)=> {
            setFunnygame(funnygame.data.data)
            // console.log(funnygame.data.data)

        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
             <section>
                <article><h2>Fire game</h2></article>
                {firegame.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article><h2>Funnygame</h2></article>
                {funnygame.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section> 
        </>
    )
}
export default Main