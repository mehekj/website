import MDXRemoteWrapper from '@/lib/MDXRemoteWrapper';
import { getPageBySlug } from '../../../lib/api';

export default async function Post({ params }: { params: { slug: string } }) {
    const page = await getPageBySlug('_misc', params.slug, ['title', 'date']);

    return (
        <div>
            <h1>{page.frontmatter.title}</h1>
            <h3>{page.frontmatter.date}</h3>
            {page.mdxContent && <MDXRemoteWrapper source={page.mdxContent} />}
        </div>
    );
}
