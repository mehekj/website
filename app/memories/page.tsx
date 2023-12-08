'use client';

import { useEffect } from 'react';

export default function Memories() {
    useEffect(() => {
        window.location.replace(
            'https://youtu.be/9EcjWd-O4jI?si=0J0UfeFXVahAqwo9'
        );
    });

    return (
        <div>
            <a
                className="link"
                href="https://youtu.be/9EcjWd-O4jI?si=0J0UfeFXVahAqwo9"
            >
                redirect
            </a>
        </div>
    );
}
