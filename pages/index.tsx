import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import pfp from '../public/by.webp'
import { Instagram } from 'react-bootstrap-icons'
import NickName from '../components/nametypewriter'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="Sriwataporn Kongdam" />
        <title>Baiyok</title>
      </Head>
      <div className='flex h-screen text-center text-bg-dark'>
        <div className="cover-container flex w-full h-full p-6 mx-auto flex-col">
          <Header />
          <main className="px-3">
              <Image className="rounded-full h-[200px]" alt="Baiyok's portrait" src={pfp} width="200px" height="200px" />
              <h1>Sriwataporn Kongdam</h1>
              <h2>(<span className='inline-block'><NickName/></span>)</h2>
              <p className="text-xl font-light">เดี๋ยวมาเขียนเดี๋ยวมาเขียนเดี๋ยวมาเขียนเดี๋ยวมาเขียนเดี๋ยวมาเขียนเดี๋ยวมาเขียนเดี๋ยวมาเขียน
              </p>
              <p className="text-xl font-light">
                <a href="https://instagram.com/sriwataphorn" target="_blank" rel="noopener noreferrer"
                    className="btn btn-lg bold border-white bg-white hover:bg-white text-black">
                      <Instagram size={30} className='mr-3'/>
                      Instagram
                </a>
              </p>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home
