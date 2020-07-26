import React  from "react";
import ATCCard from "../atccard";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";


const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;


const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  text-align: center;
  width: inherit;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const ATCList = ({ title, cards, listID, index, dispatch }) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={String(listID)} type="card">
                        {provided => (
                            <div>
                                <div>
                                    <TitleContainer>
                                        <ListTitle>{title}</ListTitle>
                                    </TitleContainer>
                                </div>
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {cards && cards.map((card, index) => (
                                        <ATCCard
                                            key={card.id}
                                            text={card.text}
                                            id={card.id}
                                            index={index}
                                            listID={listID}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default connect()(ATCList);