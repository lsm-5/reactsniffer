import React, { useState } from 'react';

class Gallery extends React.Component {
    renderComment() {
        return (<div> ... </div>)
    }
    renderImage() {
        return (
            <div>
                ...
                {this.renderComment()}
            </div>)
    }
    render() {
        return (
            <div>
                {this.renderImage()}
                ...
            </div>
        )
    }
}