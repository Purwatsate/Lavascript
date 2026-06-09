import { useNavigate, useParams, useSearchParams } from "react-router"

export const InfoPage = () => {
    const { id } = useParams();
    const [searchParam] = useSearchParams();
    const query = searchParam.get("query");
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/")
        // redirect("/")
    }
    return (
        <div>
            InfoPage : {id} - {query}
            <div>
                <button onClick={navigateToHome}>
                To Home
            </button>
            </div>
        </div>
    )
}
