export const rect = {
    type: 'rect' as const,
    height: 10,
    width: 10,
    x: 10,
    y: 10,
};

export const target = {
    id: 'target_1',
    location: {
        type: 'page' as const,
        value: 1,
    },
    shape: rect,
    type: 'region' as const,
};

export const user = {
    id: '1',
    login: 'johndoe',
    name: 'John Doe',
    type: 'user' as const,
};

export const annotation = {
    created_at: '2020-01-01T00:00:00Z',
    created_by: user,
    id: '123',
    modified_at: '2020-01-02T00:00:00Z',
    modified_by: user,
    permissions: {
        can_delete: true,
        can_edit: true,
    },
    target,
    type: 'annotation' as const,
};

export const annotations = [
    {
        id: 'anno_1',
        target: {
            location: { type: 'page', value: 1 },
            shape: { height: 10, width: 10, x: 10, y: 10, type: 'rect' },
            type: 'region',
        },
    },
    {
        id: 'anno_2',
        target: {
            location: { type: 'page', value: 2 },
            shape: { height: 20, width: 20, x: 20, y: 20, type: 'rect' },
            type: 'region',
        },
    },
    {
        id: 'anno_3',
        target: {
            location: { type: 'page', value: 3 },
            shape: { height: 30, width: 30, x: 30, y: 30, type: 'rect' },
            type: 'region',
        },
    },
    {
        id: 'anno_4',
        target: {
            location: { type: 'page', value: 10 },
            shape: { height: 40, width: 40, x: 40, y: 40, type: 'rect' },
            type: 'region',
        },
    },
];
