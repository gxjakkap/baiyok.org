import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import process from 'process'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { join } from 'path'
import { fetchJSON } from '../../misc/json'

const routefile = join(process.cwd(), 'misc', 'randomroutes.json')

type GridData = {path: string, name: string, description: string}

export const getStaticProps: GetStaticProps = async() => {
    const dataArray: GridData[] = await fetchJSON(routefile)
    return {
        props: {
            dataArray,
        }
    }
}

const RandomHome: NextPage = ({dataArray} : InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="" />
            <meta name="author" content="Sriwataporn Kongdam" />
            <title>Random - Baiyok</title>
        </Head>
        <div className='flex h-screen text-center text-bg-dark'>
            <div className="cover-container flex w-full h-full p-6 mx-auto flex-col">
                <Header />
                <main className="px-3">
                    <h1>Baiyok&apos;s Random</h1>
                    <div className="container mx-auto">
                        {dataArray.map((data: GridData) => {
                            return (
                                <div className="card w-50 bg-base-100 ml-auto mr-auto shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p className='text-left'>{data.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link href={data.path}><button className="btn btn-primary">Go</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    </>
    )
}

export default RandomHome