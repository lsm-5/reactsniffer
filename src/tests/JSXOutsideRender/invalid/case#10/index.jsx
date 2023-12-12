import React, { Component } from 'react';

class App extends Component {
    Header = () => {
        return <Text>Header</Text>;
    };

    Content = () => {
        return <Text>Content</Text>;
    };

    render() {
        return (
            <View>
                <this.Header />
                <this.Content />
            </View>
        );
    }
}

export default App;
