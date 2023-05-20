import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Botboy Superhero Toys Marketplace`
    }, [title])
}
export default useTitle