import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://api.example.com/api/items', () => {
        return HttpResponse.json([
            {
                application: 'Mathworks',
                date: '1/1/2026',
                completed: 'False',
            },
            {
                application: 'Epic',
                date: '1/2/2026',
                completed: 'False',
            }
        ])
    }),
]