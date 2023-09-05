'use client';

import Button from '@/components/Button';
import OutlineBox from '@/components/OutlineBox';
import CodeSpan from '@/components/markdown/CodeSpan';
import Link from '@/components/markdown/Link';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { FiFileText, FiGithub } from 'react-icons/fi';
import Image from '@/components/markdown/Image';
import Video from '@/components/markdown/Video';

interface MDXRemoteWrapperProps {
    source: MDXRemoteProps;
}

export default function MDXRemoteWrapper({ source }: MDXRemoteWrapperProps) {
    return (
        <MDXRemote
            {...source}
            components={{
                a: Link,
                code: CodeSpan,
                OutlineBox,
                Button,
                Image,
                Video,
                FiFileText,
                FiGithub,
            }}
        />
    );
}
