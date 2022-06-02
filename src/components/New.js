export default function New(props) {
    return(
        <div>
            <dov>{props.logo}</dov>
            <a href={props.href}>{props.title}</a>
        </div>
    )
}