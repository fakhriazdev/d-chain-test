import { Outlet } from "react-router-dom"
import Sidebar from "../../../components/Sidebar"

const Invoice = () => {
    return (
        <div>
            <Sidebar>
                <Outlet />
            </Sidebar>
        </div>
    )
}

export default Invoice;