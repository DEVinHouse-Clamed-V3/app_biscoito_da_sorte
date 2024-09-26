import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";

export default function Home(){

    const [biscoitos, setBiscoitos] = useState([]) 

 

    useEffect( () => {



            axios.get("http://192.168.0.37:3000/biscoitos")
            .then((response) => {
                setBiscoitos(response.data)
            })
            
    }, [])


    return (
        <ScrollView>
            {
                biscoitos.map(item => (
                    <Text>
                        {item?.message}
                    </Text>
                ))
            }
        </ScrollView>
    )
}