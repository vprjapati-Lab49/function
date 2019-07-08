export const search = (content: string, searchString: string): boolean => (
    content.search(new RegExp(searchString, 'i')) > -1
);