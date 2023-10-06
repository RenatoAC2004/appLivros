import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const dados = [
    {
        'id':1,
        'titulo': 'A volta dos que não foram',
        'autor': 'John Nobody',
        'editora': 'Fechou'
    },
    {
        'id':2,
        'titulo': 'Fogo na caixa dagua',
        'autor': 'Joe Nobody',
        'editora': 'Fechou'
    },
]

export default function Home(){
    return(
        <FlatList 
        data={dados}
        renderItem={({item})=>
        <Card style={estilo.cardEstilo}>
            <Card.Title title={item.titulo}/>

                <Card.Cover source={{uri: 'https://classic.exame.com/wp-content/uploads/2020/11/livros-2.jpg?quality=70&strip=info&w=1024'}}></Card.Cover>
                <Card.Content>
                    <Text>{item.autor}</Text>
                    <Text>{item.editora}</Text>
                </Card.Content>
        </Card>
    }
    
    keyExtractor={(item)=>item.id.toString()}
    
    >

        </FlatList>
    );
}

const estilo = StyleSheet.create(
    {
        cardEstilo:{
            margin:5,
        }
    }
);