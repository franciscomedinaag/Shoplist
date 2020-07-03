import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class ShoppingList extends Component {
    state={
        items:[
            {id:1, name:'hardcoded1'},
            {id:2, name:'hardcoded2'},
            {id:3, name:'hardcoded3'},
            {id:4, name:'hardcoded4'},
        ]
    }

    render(){
        const {items}=this.state; //sacar un elemento del objeto
        return(
            <Container>
                <Button color="dark" style={{marginBottom:'2rem'}}
                onClick={()=>{
                    const name=prompt('Enter Item');
                    if(name){
                        this.setState(state=>({
                            items:[...state.items, {id:5,name}]
                        }));
                    }  
                }}
                >
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id,name})=>(
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" onClick={()=>{this.setState(state=>({
                                        items:this.state.items.filter(item=>item.id!=id)
                                    }));}}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}    
                    </TransitionGroup>    
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;