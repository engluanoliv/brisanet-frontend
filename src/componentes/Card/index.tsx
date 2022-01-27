import React from 'react';
import { 
    ContainerCard,
    Details, 
    IdCard, 
    ImgCard, 
    NameCard 
} from "./style";

const Card: React.FC = () => {
    return (
        <ContainerCard>
            <ImgCard />
            <NameCard>Pikachu</NameCard>
            <IdCard>ID: 101</IdCard>
            <Details>Detalhes</Details>
        </ContainerCard>
    )
}

export default Card;