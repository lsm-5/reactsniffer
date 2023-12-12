import React, { Component } from 'react';

class App extends Component {
    Header = () => {
        return <Text>Header</Text>;
    };

    render() {
        return (
            <View>
                <this.Header />
                <Text>Content</Text>
            </View>
        );
    }
}

export default App;
