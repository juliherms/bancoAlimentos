import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { Container, Badge, NotificationList, Notification, Scroll } from './styles';

import api from '../../services/api';

export default function Notifications() {

    //cria um estado para controlar a leitura da notificacao
    const [visible, setVisible] = useState(false);
    //cria um estado de notificacoes
    const [notifications, setNotifications] = useState([]);

    //funcao responsavel por carregar as notificacoes
    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('notifications');
            setNotifications(response.data);

        }
    })

    //funcao responsavel por controlar a exibicao das notificacoes
    function handleToggleVisible() {
        setVisible(!visible);
    }
    
    return (
        <Container>
            <Badge onClick={handleToggleVisible}  hasUnread >
                <MdNotifications color="#7159c1" size={20}/>
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    <Notification unread>
                        <p>A Casa da vovó agradece a sua doação</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>A Casa da vovó agradece a sua doação</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>A Casa da vovó agradece a sua doação</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>A Casa da vovó agradece a sua doação</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>A Casa da vovó agradece a sua doação</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                        <p>A Casa da vovó agradece a sua doação</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lida</button>
                    </Notification>
                </Scroll>
            </NotificationList>

        </Container>
    )
}