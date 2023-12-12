import React, { Component } from 'react';

class App extends Component {
    Content = () => {
        return <Text>Content</Text>;
    };

    render() {
        return (
            <View>
                <Text>Header</Text>
                <this.Content />
            </View>
        );
    }
}

export default App;
