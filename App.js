import React from "react"
import { NativeRouter, Switch, Route } from "react-router-native"
import { Container, Header, Body, Title } from "native-base"

import PeopleList from "./components/PeopleList"
import PeopleInfo from "./components/PeopleInfo"

const App = () => {
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Star Wars Heroes</Title>
                </Body>
            </Header>
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={PeopleList} />
                    <Route path="/:id" component={PeopleInfo} />
                </Switch>
            </NativeRouter>
        </Container>
    )
}

export default App
