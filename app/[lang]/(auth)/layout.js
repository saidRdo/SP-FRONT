'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

export default function AuthLayout({ children }) {
    return (
        <div className={"bg-login-page"}>
            <Container className="d-flex flex-column">
                {children}
            </Container>
        </div>
    )
}
