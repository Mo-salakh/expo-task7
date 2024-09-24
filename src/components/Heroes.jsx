export default function Heroes(props) {

    const {names, handleDelete} = props

    return (
        <ul>
            {names.map((name, index) => {
                return <li key={index} onClick={() => handleDelete(index)}>{name}</li>
            })}
        </ul>
    )
}