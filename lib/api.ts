// borrowed from https://dev.to/slanted_dev/nextjs-13-blog-starter-1b6p

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getAllSlugs(dir: string) {
    const directory = join(process.cwd(), dir);
    return fs.readdirSync(directory);
}

export function getPageBySlug(
    dir: string,
    slug: string,
    fields: string[] = []
) {
    const directory = join(process.cwd(), dir);
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(directory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPages(dir: string, fields: string[] = []) {
    const slugs = getAllSlugs(dir);
    const pages = slugs
        .map((slug) => getPageBySlug(dir, slug, fields))
        // sort pages by date in descending order
        .sort((page1, page2) => (page1.date > page2.date ? -1 : 1));
    return pages;
}
