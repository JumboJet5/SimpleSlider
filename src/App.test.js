import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

describe('<App />', () => {
    it('Renders wellcome message to user', () => {
        const component = ReactTestUtils.renderIntoDocument(
            <App />
        );
    });
});