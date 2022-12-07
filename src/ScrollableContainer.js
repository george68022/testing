import React from "react";

class ScrollableContainer extends React.Component {
    render() {
        return(
            <div style={{overflow: 'scroll', border:'5px solid gold', borderRadius: '10px', height: '34rem'}}> 
                {this.props.children}
            </div>
        )
    }
//NOTE THAT CAMELCASE MUST BE USED FOR BORDER RADIUS INSTEAD OF BORDER-RADIUS WHICH IS TYPICAL IN CSS, THIS IS PART OF REACT
    
}

// const ScrollableContainer = (props) => {
//     return (
//         <div style={{overflow:'scroll', border:'5px solid black', height: '500px'}}>
//             {props.children}
//         </div>
//     )
// }


//THE ABOVE TWO COMPONENTS ARE FUNCTIONALLY THE SAME.  NOTE THE DIFFERENCE THAT PROPS DOES NOT NEED TO BE DECLARED AS A PARAMETER WHEN
//EXTENDING REACT.COMPONENT AND PROPS IS ACCESSED USING THIS.PROPS.CHILDREN


export default ScrollableContainer;