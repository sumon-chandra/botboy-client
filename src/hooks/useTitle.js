import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Botboy`
    }, [title])
}
export default useTitle