import { ButtonOperations } from "./styles";


const ButtonOpe = ({label, onCLick}) => {
    return (
        <ButtonOperations onClick={onCLick}>
            {label}
        </ButtonOperations>
        )
}

export default ButtonOpe;