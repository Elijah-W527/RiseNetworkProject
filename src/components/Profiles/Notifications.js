import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap';
import useNotificationListener from '../../hooks/useNotificationListener';
import { projectFirestore } from "../../firebase"
import { useAuth } from '../../contexts/AuthContext';

const Notifications = () => {
    const { notifications } = useNotificationListener();
    const { currentUser } = useAuth();
    
    const handleRead = async (id) => {
        
        console.log('read');
        await projectFirestore.collection('profiles').doc(currentUser.uid)
            .collection('notifications').doc(id).delete();
        
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a className="nav-link" onClick={e => {
            e.preventDefault();
            onClick(e);
          }}>
              <span className="badge badge-danger">{notifications.length > 0 && notifications.length}</span>
              <FontAwesomeIcon icon = {faBell} />
          {children}
        </a>
      ));
      
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

            <Dropdown.Menu className = "dropdown-menu-right">
                {notifications.length > 0 ? notifications.map((notif, index) => (
                    <Dropdown.Item key = {notif.id} onClick = {() => handleRead(notif.id)} className={index < notifications.length - 1 && "border-bottom"}>{notif.notificationMessage}</Dropdown.Item>
                ))
                : <Dropdown.Item>All caught up!</Dropdown.Item>}
                
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Notifications;