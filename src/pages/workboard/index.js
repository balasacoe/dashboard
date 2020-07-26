import React, { PureComponent } from "react";
import ATCList from "../../components/atclist";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sort } from "../../actions";
import ATCDialog from "../../components/atcdialog";


const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin:10px;
`;

class WorkBoard extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClickOpen.bind(this);
        this.handleClose.bind(this);
    }
    onDragEnd = result => {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        this.props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );
    };


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { lists, cards } = this.props;
        return (
            <React.Fragment>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <h2 style={{ color: "#ff4552", textAlign: "center" }}>ATC Board</h2>
                    {/* Adding to new task */}
                    <ATCDialog listId="list-0" />
                    <Droppable droppableId="all-lists" direction="horizontal" type="list">
                        {provided => (
                            <ListsContainer
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {lists && lists.tasks && lists.tasks.map((listID, index) => {
                                    const list = lists[listID];
                                    if (list) {
                                        const listCards = list && list.cards && list.cards.map(cardID => cards[cardID]);
                                        return (
                                            <ATCList
                                                listID={list.id}
                                                key={list.id}
                                                title={list.title}
                                                cards={listCards}
                                                index={index}
                                            />
                                        );
                                    }
                                })}
                                {provided.placeholder}

                            </ListsContainer>
                        )}
                    </Droppable>
                </DragDropContext>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards
});

export default connect(mapStateToProps)(WorkBoard);