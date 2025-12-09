import { useEffect, useState } from "react";
import axios from "axios";

interface ServerData {
    message: string;
    time: string;
}
function App() {
    const [serverData, setServerData] = useState<ServerData | null>(null);

    useEffect(() => {
        axios.get("http://localhost:4000/api/data")
            .then(res => {
                console.log(res.data);
                setServerData(res.data);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <>
            <h1>React + Express API Test</h1>

            {serverData ? (
                <div>
                    <p>Message: {serverData.message}</p>
                    <p>Time: {serverData.time}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default App;
