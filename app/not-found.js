"use client"
import Link from "next/link";

export default function NotFound() {
    const GoBack = (event)=> {
        event.preventDefault()
        history.back()
    }

    return (
        <div className="notfound">
            <div className={"not-found"}>
                <div className={"found-content"}>
                    <div className={"notfound-image"}>
                        <img src={'/images/error/404.png'}/>
                    </div>
                    <div className={"notfound-body"}>
                        <h1> 404 </h1>
                        <h2>Not Found</h2>
                        <p>Could not find requested resource</p>
                        <Link href="#" onClick={GoBack} className={"HomeBtn"}>go back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}