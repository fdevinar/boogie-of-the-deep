export default function CinemaModal ({ image, caption, onClose }) {

    return (
        <div className="modal-image">
            <img src={ image } onClick={onClose} alt="Modal Image" />
            <p className="caption">{ caption }</p>            
        </div>
    )

}