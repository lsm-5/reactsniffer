import React, { useState } from 'react';

function Component() {
    const TopSection = () => {
        return (
            <header>
                <h1>Component header</h1>
            </header>
        )
    }

    const MiddleSection = () => {
        return (
            <main>
                <p>Some text</p>
            </main>
        )
    }

    const BottomSection = () => {
        return (
            <footer>
                <p>Some footer text</p>
            </footer>
        )
    }

    return (
        <div>
            {TopSection()}
            {MiddleSection()}
            {BottomSection()}
        </div>
    )
}