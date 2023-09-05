import MDXRemoteWrapper from '@/lib/MDXRemoteWrapper';
import { getPageBySlug } from '@/lib/api';
import '@/styles/markdown.css';

export default async function Post({ params }: { params: { slug: string } }) {
    const page = await getPageBySlug('_projects', params.slug, [
        'title',
        'date',
    ]);

    return (
        <div className="project-page flex flex-col gap-y-6">
            <div className="flex flex-row items-baseline gap-x-6">
                <h1>{page.frontmatter.title}</h1>
                {/* <h3>{page.frontmatter.date}</h3> */}
            </div>
            {page.mdxContent && <MDXRemoteWrapper source={page.mdxContent} />}
        </div>
    );
}
