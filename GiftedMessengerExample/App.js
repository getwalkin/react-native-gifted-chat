import React, { Component } from 'react';
import {
  Dimensions,
} from 'react-native';

import {GiftedMessenger, Message, Composer, Time} from './react-native-gifted-messenger/GiftedMessenger';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          {text: 'Newest Message',  time: new Date(Date.UTC(2016, 6, 11, 17, 30, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 11, 17, 10, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 11, 17, 9, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 11, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 10, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 10, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 10, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Message',         time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
          {text: 'Oldest Message',  time: new Date(Date.UTC(2016, 6, 1, 17, 0, 0))},
        ]
      });
    }, 0); // simulating network
  }
  render() {
    return (
      <GiftedMessenger
        maxHeight={Dimensions.get('window').height}
        components={{
          Composer: Composer,
          Message: Message,
          Time: Time,
        }}

        messages={this.state.messages}
        onSend={this.onSend.bind(this)}
      />
    );
  }
  onSend(message) {
    console.log(message.text);
  }
}

export default App;