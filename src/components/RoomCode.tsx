import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type roomCodeProps = {
    code: string;
}

export function RoomCode(props: roomCodeProps){
    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText(props.code);
    }

    return(
        <button className="room-code" onClick={copyRoomCodeToClipBoard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    );
}