import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, TextareaHTMLAttributes, useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'


const Grouper: NextPage = () => {
    const [member, setMember] = useState('')
    const [divider, setDivider] = useState(0)

    const handleMemberChange = (event: any) =>{
        setMember(event.target.value)
    }

    const handleDividerChange = (event: any) => {
        setDivider(event.target.value)
    }


    const getRandomSequence = async () => {
        const rs = await fetch('https://www.random.org/sequences/?min=1&max=10&col=1&format=plain&rnd=new')
        const rst = await rs.text()
        return rst
    }

    const onButtonClick = () => {
        const rawInput = member
        if (!rawInput || !rawInput.includes(',')) {
            alert('Input something!')
            return
        }
        const memberArray = rawInput.split(',')
        console.log(memberArray)
    }
    
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
                    <h1 className="mb-4">Group Divider</h1>
                    <div className="relative">
                        <textarea className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-[100px]" id="member" value={member} onChange={handleMemberChange}></textarea>
                        <label className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" htmlFor="member">Names seperated by comma</label>
                    </div>
                    
                    <div style={{height: '10px'}}></div>
                    <div className="relative">
                        <input id="divider" type="number" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={divider} onChange={handleDividerChange} placeholder=" " />
                        <label htmlFor="divider" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Divided by (Groups)</label>
                    </div>
                    <button className="btn bg-blue-700 hover:bg-blue-700 border-transparent px-5 p mt-3" onClick={() => {onButtonClick()}}>Random!</button>
                    <div className='grid grid-cols-1 gap-6 mt-1 sm:mt-9 md:mt-13 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
                    
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    </>
    )
}

export default Grouper