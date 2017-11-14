import React, { Component } from 'react';
import { Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { observer } from "mobx-react";
import helloStore from "../stores/HelloStore";

const endpoint = 'https://api.graph.cool/simple/v1/??';

//For testing
const ENS_SPØRGSMÅL = gql`
query sameUndQuery{
    Undskyldning(id: "cj9ocbkqn7krd0143wtim20hm"){
      content
    }
}`

const allSpørgsmålsQuery = gql`
query {
  allSpørgsmål {
    id
    content
    createdAt
    isAccepted
  }
}
`

@observer
class SpørgsmålsComp extends Component {

    getRandomUndIndex(){
      return Math.floor(Math.random() * this.props.allSpørgsmålsQuery.allSpørgsmål.length);
    }

    render() {
      var query = this.props.allSpørgsmålsQuery;

      if (query && query.loading) {
        return (<Text style={this.props.style}>{helloStore.lastText}</Text>);
      }
      if (query && query.error) {
          return (<Text style={this.props.style}>fix server fejlene</Text>);
      }    

      //Force a refresh from other component
      if(helloStore.buttonPressedCounter > 0){
      }

      //Sets list
      if(helloStore.undList.length < 1){
          helloStore.setUndList(this.props.allSpørgsmålsQuery.allSpørgsmål);
      }
      

      var randomIndex = this.getRandomUndIndex();
      var showText = (this.props.allSpørgsmålsQuery.allSpørgsmål[randomIndex].content);
      helloStore.setCurrentText(showText);

      return (
        <Text style={this.props.style}>{showText}</Text>
      )
    }
}

export default graphql(allSpørgsmålsQuery, { name: 'allSpørgsmålsQuery' }) (SpørgsmålsComp);