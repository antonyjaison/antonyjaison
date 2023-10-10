'use client'

import React, { useEffect } from 'react';
import styles from '@styles/typeWriter.module.scss';
import Typewriter from 'typewriter-effect/dist/core';

const TypeWriterText = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            strings: ['> Full-stack developer', '> UI/UX designer', '> Open-source contributor', '> Tech enthusiast'],
            autoStart: true,
            loop: true,
        });

        return () => {
            typewriter.stop();
        };
    }, []);

    return (
        <p id="typewriter" className={styles.typewriter_text}></p>
    );
}

export default TypeWriterText;
