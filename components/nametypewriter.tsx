import Typewriter from 'typewriter-effect'
const NickName = () => {
    return (
        <Typewriter
            options={{autoStart: true, loop: true}}
            onInit={(typewriter) => {
                typewriter.typeString('Baiyok')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Yok')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Boryor')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Noomnum')
                .pauseFor(1000)
                .deleteAll()
                .start()
        }}/>
    )
}

export default NickName