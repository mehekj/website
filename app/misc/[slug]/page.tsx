import Markdown from '@/components/Markdown';
import { getPageBySlug } from '../../../lib/api';
import markdownToHtml from '../../../lib/markdownToHtml';

export default async function Post({ params }: { params: { slug: string } }) {
    const page = getPageBySlug('_misc', params.slug, [
        'title',
        'date',
        'content',
    ]);

    const content = await markdownToHtml(page.content || '');

    return <Markdown html={content} />;
}
