export default function CinemaModal ({ image, onClose }) {

    return (
        <div className="modal-image">
            <img src={ image } onClick={onClose} alt="Modal Image" />            
        </div>
    )

}