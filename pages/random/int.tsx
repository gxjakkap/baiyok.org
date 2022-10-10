import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Loading from '../../components/loading'
import Modal from '../../components/modal'


const IntGenerator: NextPage = () => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [answerVisible, setAnswerVisibility] = useState(false)
    const [answerTextVisible, setAnswerTextVisibility] = useState(false)
    /* const [modalVisible, setModalVisibility] = useState(false)
    const [modalInfo, setModalInfo] = useState({title: 'Error', message: 'Error Message'}) */

    const handleMinChange = (event: any) =>{
        setMin(event.target.value)
    }

    const handleMaxChange = (event: any) =>{
        setMax(event.target.value)
    }


    const getRandomNumber = async (min: Number, max: Number) => {
        const rs = await fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`)
        const rst = await rs.text()
        return parseInt(rst)
    }

    const onButtonClick = () => {
        setAnswerTextVisibility(false)
        const rawInput = [min, max]
        if (rawInput[0]==0 && rawInput[1]==0) {
            //setModalInfo({title: 'Error!', message: 'Missing Input.'})
            //setModalVisibility(true)
            alert('Missing Input')
            return
        }
        setAnswerVisibility(true)
        setLoading(true)
        getRandomNumber(min, max)
            .then(picked => {
                setLoading(false)
                setAnswerVisibility(true)
                setAnswerTextVisibility(true)
                setResult(picked.toString())
            })
        
    }
    
    return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="Sriwataporn Kongdam" />
            <title>Number - Baiyok/Random</title>
        </Head>
        <div className='flex h-screen text-center text-bg-dark'>
            <div className="cover-container flex w-full h-full p-6 mx-auto flex-col">
                <Header />
                <main className="px-3">
                    <h1 className="mb-4">Number Generator</h1>
                    <div className="flex mt-[50px]">
                        <div className="relative ml-auto mr-auto">
                            <input className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-[60px]" id="min" value={min} onChange={handleMinChange}></input>
                            <label className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" htmlFor="min">Min</label>
                        </div>
                        <div className="relative ml-auto mr-auto">
                            <input className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-[60px]" id="max" value={max} onChange={handleMaxChange}></input>
                            <label className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" htmlFor="max">Max</label>
                        </div>
                    </div>
                    <div style={{height: '10px'}}></div>
                    <button className="btn bg-blue-700 hover:bg-blue-700 border-transparent px-5 p mt-3" onClick={() => {onButtonClick()}}>Pick!</button>
                    {answerVisible &&
                        <div>
                            {loading ? <Loading /> : <></>}
                            {answerTextVisible ? <h2 className='mt-5'>{result}</h2> : <></>}
                        </div>
                    }
                </main>
                <Footer/>
            </div>
        </div>
        {/* {modalVisible ? <Modal title={modalInfo.title} message={modalInfo.message} /> : <></>} */}
    </>
    )
}

export default IntGenerator