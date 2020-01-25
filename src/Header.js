import React from 'react'
import Container from "@material-ui/core/Container";

export default function Header (props) {

    return <Container color="#111111">

            Todo's: {props.users.length}

    </Container>

}