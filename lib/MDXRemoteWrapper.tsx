'use client';

import Button from '@/components/Button';
import OutlineBox from '@/components/OutlineBox';
import CodeSpan from '@/components/markdown/CodeSpan';
import Image from '@/components/markdown/Image';
import Link from '@/components/markdown/Link';
import Video from '@/components/markdown/Video';
import Youtube from '@/components/markdown/Youtube';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { FiFigma, FiFileText, FiGithub } from 'react-icons/fi';

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
                Youtube,
                FiFileText,
                FiGithub,
                FiFigma,
            }}
        />
    );
}
