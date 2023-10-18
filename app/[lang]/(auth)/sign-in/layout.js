'use client'
import {Container} from "react-bootstrap";

export default function signInLayout({children}) {
    return (
        <div className={"bg-login-page"}>
            <Container className="d-flex flex-column">
                {children}
            </Container>
        </div>
    )
}