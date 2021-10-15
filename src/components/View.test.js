import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

import articleService from '../services/articleServices';
jest.mock('../services/articleServices');

const testArticles = [
    {
        id: '12345',
        headline: 'Example Headline',
        author: 'Nathan Forman',
        body: 'Example Body',
        createdOn: 'Friday, October 15, 2021',
        summary: 'Example Summary',
        image: 1
    },
    {
        id: '678910',
        headline: 'Example Headline 2',
        author: 'Nathan Forman 2',
        body: 'Example Body 2',
        createdOn: 'Saturday, October 16, 2021',
        summary: 'Example Summary 2',
        image: 2
    },
    {
        id: '54321',
        headline: 'Example Headline 3',
        author: 'Nathan Forman 3',
        body: 'Example Body 3',
        createdOn: 'Sunday, October 17, 2021',
        summary: 'Example Summary',
        image: 3
    },
]

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce();
    const mockArticleService = jest.fn();
    render(<View articleService={mockArticleService}/>);
    await waitFor(() => {
        expect(mockArticleService).not.toBeCalled();
    })
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce(testArticles);
    const mockArticleService = jest.fn();
    render(<View articleService={mockArticleService} />);
    await waitFor(() => {
        const myArticle = screen.getAllByTestId('article')
        console.log(myArticle)
        expect(myArticle).toHaveLength(3);
    })
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.