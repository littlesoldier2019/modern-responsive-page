import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export const exportRawText = (text) => {
    const rawHtml = text.fields.content;
    const formattedContent = documentToReactComponents(rawHtml);
    return formattedContent;
}