import { memo } from "react"

function Content({count}) {
    console.log('render component')
    return(
        <h1>Hello</h1>
    )
}
export default memo(Content)