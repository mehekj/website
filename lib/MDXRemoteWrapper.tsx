'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

interface MDXRemoteWrapperProps {
    source: MDXRemoteProps;
}

export default function MDXRemoteWrapper({ source }: MDXRemoteWrapperProps) {
    return <MDXRemote {...source} />;
}
