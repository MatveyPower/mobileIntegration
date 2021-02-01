import React, { useEffect, useState } from "react"
import { ScrollView } from "react-native"
import { Spinner, List } from "native-base"
import { useHistory } from "react-router-dom";


import axios from "axios"

import People from "./People"

const PeopleList = () => {
    const history = useHistory()
    const [people, setPeople] = useState([])

    const fetchPeople = async () => {
        try {
            const {
                data: { results },
            } = await axios.get("https://swapi.dev/api/people/")
            setPeople(results)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPeople()
    }, [])

    return people ? (
        <ScrollView>
            <List>
                {
                    people.map(({ name, birth_year }, index) => {
                        return (
                            <People
                                key={index}
                                name={name}
                                birthYear={birth_year}
                                id = {index}
                                history = {history}
                            />
                        )
                    })}
            </List>
        </ScrollView>
    ) : (
        <Spinner />
    )
}

export default PeopleList
