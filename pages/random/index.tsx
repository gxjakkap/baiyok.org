import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/footer'
import Header from '../../components/header'


const RandomHome: NextPage = () => {
    return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="Sriwataporn Kongdam" />
            <title>Random - Baiyok</title>
        </Head>
        <div className='flex h-screen text-center text-bg-dark'>
            <div className="cover-container flex w-full h-full p-6 mx-auto flex-col">
                <Header />
                <main className="px-3">
                    
                </main>
                <Footer/>
            </div>
        </div>
    </>
    )
}

export default RandomHome