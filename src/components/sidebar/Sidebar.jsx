import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='side'>
            <div className="buttonGroup">
                <button>Dashboard</button>
                <button>Booking</button>
                <button>User</button>
                <button>Room</button>
                <button>Payment</button>
                <button onClick={()=>navigate("service")}>Service</button>
                <button>History</button>
                <button onClick={()=>navigate("branch")}>Branch</button>
            </div>
        </div>
    )
}

export default Sidebar