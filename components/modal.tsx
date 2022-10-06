type Props = {
    title: string,
    message: string
}

const Modal = (props: Props) => {
    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{props.title}</h3>
                    <p className="py-4">PlaceHolder</p>
                </label>
            </label>
        </>
    )
}

export default Modal