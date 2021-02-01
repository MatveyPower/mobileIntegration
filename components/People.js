import React from "react"
import { ListItem, Left, Thumbnail, Body, Text, Right, Button  } from "native-base"

const People = ({ name, birthYear, id, history }) => {
    const showInfo = () => {
        history.push(`/${id}`)
    }

    return (
        <ListItem avatar >
            <Left>
                <Thumbnail
                    source={{
                        uri:
                            "https://riotpixels.net/wp/wp-content/uploads/2020/05/Star-Wars.png",
                    }}
                />
            </Left>
            <Body>
                <Text>{name}</Text>
                <Text note>
                    {birthYear}
                </Text>
            </Body>
            <Right>
                <Button transparent onPress = {showInfo}>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    )
}

export default People