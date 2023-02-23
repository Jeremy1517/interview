// import React, {Component} from 'react';

// class Cards extends Component {
//     state = { count:0};
//     render() {
//         return (
//             <div>
//                 <button onClick={this.navigatePage}>Button</button>
//             </div>
//         );
//     }

//     navigatePage = () => {
//         console.log("button clicked", this);

//     }

// }

// export default Cards;
import React, {Component} from 'react';

class Cards extends Component {
    state = { count:0 };
    render() {
        return (
            <div>
                <button onClick={this.navigatePage}>Button</button>
            </div>
        );
    }

    navigatePage = () => {
        console.log("button clicked", this);  
    }

}

export default Cards;