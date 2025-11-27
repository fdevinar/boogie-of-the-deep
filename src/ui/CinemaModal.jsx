export default function CinemaModal ({ image, onClose }) {

    return (
        <div className="modal-image">
            <img src={ image } alt="Modal Image" />
            <button onClick={onClose}>X</button>
        </div>
    )

}