import * as React from 'react';
import Head from 'next/head';

interface Props {
    title?: string;
}

const HomeHeader: React.FC<Props> = ({title}) => (
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='' />
        <meta name='author' content='@elnigerian' />
        <link href='../'/>
    </Head>
);

export default HomeHeader;
