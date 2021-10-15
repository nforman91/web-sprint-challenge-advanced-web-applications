import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react';

const testArticle = {
    id: '12345',
    headline: 'Example Headline',
    author: 'Nathan Forman',
    body: 'Example Body',
    createdOn: 'Friday, October 15, 2021',
    summary: 'Example Summary',
    image: 1
}

const testArticleWithoutAuthor = {
    id: '12345',
    headline: 'Example Headline',
    author: '',
    body: 'Example Body',
    createdOn: 'Friday, October 15, 2021',
    summary: 'Example Summary',
    image: 1
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />);
    const myHeadline = screen.queryByText(/example headline/i);
    const myAuthor = screen.queryByText(/nathan forman/i);
    const mySummary = screen.queryByText(/example summary/i);
    const myBody = screen.queryByText(/example body/i);
    expect(myHeadline).toBeInTheDocument();
    expect(myAuthor).toBeInTheDocument();
    expect(mySummary).toBeInTheDocument();
    expect(myBody).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticleWithoutAuthor} />);
    const altAuthor = screen.queryByText(/associated press/i);
    expect(altAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockHandleDelete = jest.fn();
    render(<Article article={testArticle} handleDelete={mockHandleDelete}/>);
    const myButton = screen.queryByTestId('deleteButton');
    userEvent.click(myButton);
    expect(mockHandleDelete).toBeCalledTimes(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.