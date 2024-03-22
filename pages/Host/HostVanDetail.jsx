import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = React.useState(null);
    const {id} = useParams();

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans[0]))
    }, []);
console.log(currentVan)
    return (
        <h1>Host Van Detail Page for van {id}</h1>
    )
}