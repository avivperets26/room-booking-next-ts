

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([]), // Default mock response
    }) as Promise<Response>
);