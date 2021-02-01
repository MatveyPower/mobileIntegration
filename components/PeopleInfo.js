import React, {useState, useEffect} from "react"
import { CardItem, Body, Text, Footer, Button, Spinner } from "native-base"

import axios from 'axios'

const PeopleInfo = ({ match:{params: {id}}, history }) => {
    const [info, setInfo] = useState(null)
    const fetchInfo = async () => {
        try {
            const { data } = await axios.get(
                `https://swapi.dev/api/people/${id}`
            )
            setInfo(data)
        } catch (e) {
            console.log(e)
        }
    }

    const toHome = () => {
        history.push('/')
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return info ? ( 
        <CardItem bordered>
            <Body>
                <Text>{info.gender}</Text>
                <Text>{info.birth_year}</Text>
                <Text>{info.eye_color}</Text>
            </Body>
            <Footer>
                <Button full dark onPress = {toHome}>
                    <Text>Назад</Text>
                </Button>
            </Footer>
        </CardItem>
    ): <Spinner/>
}

export default PeopleInfo
