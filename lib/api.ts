// borrowed from https://dev.to/slanted_dev/nextjs-13-blog-starter-1b6p

import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';

type PageData = {
    frontmatter: { [key: string]: string };
    mdxContent?: MDXRemoteSerializeResult;
};

export function getAllSlugs(dir: string) {
    const directory = join(process.cwd(), dir);
    return fs.readdirSync(directory);
}

export async function getPageBySlug(
    dir: string,
    slug: string,
    fields: string[] = []
) {
    const directory = join(process.cwd(), dir);
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(directory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const mdx = await serialize(fileContents, { parseFrontmatter: true });

    let out: PageData = { frontmatter: {} };

    fields.forEach((field) => {
        if (field === 'slug') {
            out.frontmatter[field] = realSlug;
        }

        if (mdx.frontmatter[field]) {
            out.frontmatter[field] = String(mdx.frontmatter[field]);
        }
    });

    out.mdxContent = mdx;

    return out;
}

export async function getAllPages(dir: string, fields: string[] = []) {
    const slugs = getAllSlugs(dir);
    const pages = await Promise.all(
        slugs.map((slug) => getPageBySlug(dir, slug, fields))
    );
    return pages.sort((page1, page2) =>
        page1.frontmatter.date > page2.frontmatter.date ? -1 : 1
    );
}
