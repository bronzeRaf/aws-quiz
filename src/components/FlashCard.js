import React, {Component} from 'react';
import MultiCard from './MultiCard';
import RegularCard from './RegularCard';
import RandomWeighted from './RandomWeighted';

class FlashCard extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <RandomWeighted />
            </div>
        )
    }
}

export default FlashCard;
