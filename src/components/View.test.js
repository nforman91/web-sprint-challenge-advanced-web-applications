import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

import articleService from '../services/articleServices';
jest.mock('../services/articleServices');

const testArticle = {
    id: '12345',
    headline: 'Example Headline',
    author: 'Nathan Forman',
    body: 'Example Body',
    createdOn: 'Friday, October 15, 2021',
    summary: 'Example Summary',
    image: 1
}

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce(testArticle);
    const mockArticleService = jest.fn();
    render(<View articleService={mockArticleService}/>);
    await waitFor(() => {
        const myArticle = screen.queryByTestId('article');
        expect(myArticle).not.toBeInTheDocument();
    })
});

// test("renders three articles without errors", async ()=> {
//     articleService.mockResolvedValueOnce(testArticle);
//     const mockArticleService = jest.fn();
//     render(<View articleService={mockArticleService}/>);
//     await waitFor(() => {
//         const myArticle = screen.queryByTestId('article');
//         expect(myArticle).toHaveLength(3);
//     })
// });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.